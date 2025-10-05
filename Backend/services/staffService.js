const db = require("../config/DatabaseConnection");
const fs = require("fs");
const path = require("path");

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

async function viewMaterialByID(courseID) {
  const sql = `SELECT * FROM material WHERE course_id = ? ORDER BY created_at DESC`;
  const [rows] = await db.query(sql, [courseID]);
  return rows;
}

async function fetchCourseById(courseID) {
  const sql = `SELECT * FROM course WHERE course_id = ?`;
  const [rows] = await db.query(sql, [courseID]);
  if (rows.length === 0) throw new Error("Course not found");
  return rows[0];
}

async function updateCourseById(courseID, data) {
  const { course_id, course_title, program_id, year, sem, batch } = data;

  const sql = `
    UPDATE course
    SET 
      course_id = ?, 
      course_title = ?, 
      program_id = ?, 
      year = ?, 
      sem = ?, 
      batch = ?
    WHERE course_id = ?
  `;

  const [result] = await db.query(sql, [
    course_id,
    course_title,
    program_id,
    year,
    sem,
    batch,
    courseID,
  ]);

  return result;
}

async function deleteCourseById(id) {
  try {
    const [materials] = await db.query(
      "SELECT material_doc FROM material WHERE course_id = ? AND material_type = 'doc'",
      [id]
    );

    for (const m of materials) {
      if (m.material_doc) {
        const filePath = path.join(__dirname, "../uploads", m.material_doc);
        try {
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`Deleted file: ${filePath}`);
          }
        } catch (err) {
          console.error(`Error deleting file ${filePath}:`, err);
        }
      }
    }

    const [result] = await db.query("DELETE FROM course WHERE course_id = ?", [
      id,
    ]);

    return result;
  } catch (err) {
    console.error("Error deleting course:", err);
    throw err;
  }
}

module.exports = {
  createCourse,
  viewCourse,
  fetchCourseById,
  updateCourseById,
  viewMaterialByID,
  deleteCourseById,
};
