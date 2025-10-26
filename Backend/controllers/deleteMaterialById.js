const { deleteMaterial } = require("../services/materialService");
const fs = require("fs");
const path = require("path");

async function deleteMaterialById(req, res) {
  try {
    const id = req.params.id;

    // 1. Fetch material to get file info before deletion
    const material = await deleteMaterial(id, true); // fetch before deletion
    if (!material) {
      return res.status(404).json({ message: "Material not found" });
    }

    // 2. Delete the uploaded file if it exists
    if (material.material_doc) {
      const filePath = path.join(
        __dirname,
        "../uploads",
        material.material_doc
      );
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    // 3. Delete the record from database
    await deleteMaterial(id);

    res.status(200).json({ message: "Material deleted successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: err.message || "Failed to delete material" });
  }
}

module.exports = deleteMaterialById;
