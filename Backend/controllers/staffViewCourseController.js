const { viewCourse } = require("../services/staffService");

async function fetchAllCourseByID(req, res) {
  try {
    const user_id = req.params.user_id;

    if (!user_id) {
      return res.status(400).json({ error: "Missing UserID parameter" });
    }
    const courses = await viewCourse(user_id);
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
}

module.exports = fetchAllCourseByID;
