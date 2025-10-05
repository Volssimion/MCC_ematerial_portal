const { createMaterial } = require("../services/materialService");

async function uploadMaterial(req, res) {
  try {
    const { material_id, material_title, user_id, course_id, material_type } =
      req.body;

    let material_doc = null;
    let material_url = null;

    // File uploaded
    if (req.file && material_type === "doc") {
      material_doc = req.file.filename; // store only filename
    }

    // Link type
    if (material_type === "link") {
      material_url = req.body.material_url;
    }

    // Validate
    if (
      !material_id ||
      !material_title ||
      !user_id ||
      !course_id ||
      !material_type ||
      (!material_doc && !material_url)
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await createMaterial({
      material_id,
      material_title,
      user_id,
      course_id,
      material_type,
      material_doc,
      material_url,
    });

    res.status(201).json({ message: "Material uploaded successfully", result });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: err.message || "Failed to upload material" });
  }
}

module.exports = uploadMaterial;
