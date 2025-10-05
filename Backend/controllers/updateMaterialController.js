const {
  getMaterialById,
  updateMaterial,
} = require("../services/materialService");
const path = require("path");
const fs = require("fs");

async function fetchMaterialById(req, res) {
  try {
    const materialID = req.params.materialID;
    const material = await getMaterialById(materialID);

    if (!material) {
      return res.status(404).json({ message: "Material not found" });
    }

    // If material_doc exists, return full URL for frontend
    if (material.material_doc) {
      material.material_doc = `${req.protocol}://${req.get("host")}/uploads/${
        material.material_doc
      }`;
    }

    res.status(200).json(material);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch material" });
  }
}

async function editMaterial(req, res) {
  try {
    const materialID = req.params.materialID;
    const { material_title, material_type, material_url } = req.body;

    const existing = await getMaterialById(materialID);
    if (!existing)
      return res.status(404).json({ message: "Material not found" });

    let updatedData = { material_title, material_type };

    // Handling link
    if (material_type === "link") {
      updatedData.material_url = material_url;
      updatedData.material_doc = null;

      // Delete old file if exists
      if (existing.material_doc) {
        const oldPath = path.join(
          __dirname,
          "../uploads",
          existing.material_doc
        );
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
    }

    // Handling doc
    if (material_type === "doc" && req.file) {
      // Delete old file if exists
      if (existing.material_doc) {
        const oldPath = path.join(
          __dirname,
          "../uploads",
          existing.material_doc
        );
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      updatedData.material_doc = req.file.filename; // store only filename
      updatedData.material_url = null;
    }

    await updateMaterial(materialID, updatedData);
    res.status(200).json({ message: "Material updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update material" });
  }
}
module.exports = { fetchMaterialById, editMaterial };
