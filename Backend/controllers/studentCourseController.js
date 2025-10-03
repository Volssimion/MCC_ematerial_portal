const { getCourses } = require("../services/studentService");

async function getCourse(req, res) {
  try {
    const { program_id, year, sem, batch } = req.query;

    if (!program_id || !year || !sem || !batch) {
      return res.status(400).json({ error: "Missing query parameters" });
    }

    const course = await getCourses(program_id, year, sem, batch);
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
}

module.exports = getCourse;
