const db = require("../config/DatabaseConnection");

async function getCourses(program_id, year, sem, batch) {
  const sql = `
      SELECT * FROM course
      WHERE program_id = ? AND year = ? AND sem = ? AND batch = ?
    `;

  const [rows] = await db.query(sql, [program_id, year, sem, batch]);
  return rows;
}

async function getMaterialsByCourse(courseID) {
  const sql = `SELECT * FROM material WHERE course_id = ? ORDER BY created_at DESC`;

  const [rows] = await db.query(sql, [courseID]);
  return rows;
}

module.exports = { getCourses, getMaterialsByCourse };
