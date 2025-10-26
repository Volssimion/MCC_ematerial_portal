const path = require("path");
const fs = require("fs");
const { getMaterialById } = require("../services/materialService");

async function downloadMaterial(req, res) {
  try {
    const materialID = req.params.materialID;
    const material = await getMaterialById(materialID);

    if (!material || !material.material_doc) {
      return res
        .status(404)
        .json({ message: "Material not found or is a link" });
    }

    const filePath = path.join(__dirname, "../uploads", material.material_doc);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found on server" });
    }

    // Use original_name if exists, otherwise fallback to server filename
    const fileName = material.original_name || material.material_doc;

    res.download(filePath, fileName);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to download material" });
  }
}

module.exports = downloadMaterial;
