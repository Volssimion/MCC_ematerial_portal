const db = require("../config/DatabaseConnection");

async function createCourse(courseData) {
  const sql = `
    INSERT INTO course (
      course_id,
      course_title,
      program_id,
      user_id,
      year,
      sem,
      batch
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    courseData.course_id,
    courseData.course_title,
    courseData.program_id,
    courseData.user_id,
    courseData.year,
    courseData.sem,
    courseData.batch,
  ];
  const [result] = await db.query(sql, values);
  return result;
}

async function viewCourse(user_id) {
  const sql = `SELECT * FROM course WHERE user_id = ? ORDER BY created_at DESC`;
  const [rows] = await db.query(sql, [user_id]);
  return rows;
}

module.exports = { createCourse, viewCourse };
