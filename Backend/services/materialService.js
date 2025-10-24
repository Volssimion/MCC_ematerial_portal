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

async function getMaterialById(materialID) {
  const [rows] = await db.query(
    "SELECT * FROM material WHERE material_id = ?",
    [materialID]
  );
  return rows.length ? rows[0] : null;
}

async function getAllMaterialByUserId(user_id) {
  const [rows] = await db.query("SELECT * FROM material WHERE user_id = ?", [
    user_id,
  ]);
  return rows;
}

async function updateMaterial(materialID, updatedData) {
  const sql = `
    UPDATE material 
    SET material_title = ?, 
        material_type = ?, 
        material_doc = ?, 
        material_url = ?
    WHERE material_id = ?
  `;

  const values = [
    updatedData.material_title,
    updatedData.material_type,
    updatedData.material_doc || null,
    updatedData.material_url || null,
    materialID,
  ];

  const [rows] = await db.query(sql, values);
  return rows;
}

async function deleteMaterial(id, returnBeforeDelete = false) {
  const [rows] = await db.query(
    "SELECT * FROM material WHERE material_id = ?",
    [id]
  );

  if (rows.length === 0) throw new Error("Material not found");

  if (returnBeforeDelete) return rows[0]; // return material info before deletion

  await db.query("DELETE FROM material WHERE material_id = ?", [id]);
  return { deleted: true };
}

module.exports = {
  createMaterial,
  getMaterialById,
  getAllMaterialByUserId,
  updateMaterial,
  deleteMaterial,
};
