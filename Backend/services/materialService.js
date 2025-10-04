const db = require("../config/DatabaseConnection");

async function createMaterial(materialData) {
  const sql = `
    INSERT INTO material (
      material_id,
      material_title,
      user_id,
      course_id,
      material_type,
      material_doc,
      material_url
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    materialData.material_id,
    materialData.material_title,
    materialData.user_id,
    materialData.course_id,
    materialData.material_type,
    materialData.material_doc || null,
    materialData.material_url || null,
  ];

  const [rows] = await db.query(sql, values);
  return rows;
}

module.exports = { createMaterial };
