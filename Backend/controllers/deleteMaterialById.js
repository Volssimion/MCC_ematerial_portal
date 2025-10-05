const { deleteMaterial } = require("../services/materialService");
const fs = require("fs");
const path = require("path");

async function deleteMaterialById(req, res) {
  try {
    const id = req.params.id;

    // 1. Fetch material to get file name
    const material = await deleteMaterial(id, true); // fetch before deletion

    // 2. Delete file if exists
    if (material && material.material_doc) {
      const filePath = path.join(
        __dirname,
        "../uploads",
        material.material_doc
      );
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    // 3. Delete from database
    await deleteMaterial(id);

    res.json({ message: "Material deleted successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: err.message || "Failed to delete material" });
  }
}

module.exports = deleteMaterialById;
