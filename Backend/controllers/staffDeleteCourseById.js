const { deleteCourseById } = require("../services/staffService");

async function deleteCourse(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Missing Id Paramter" });
    }
    const course = await deleteCourseById(id);
    res.json(course);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database query failed" });
  }
}

module.exports = deleteCourse;
