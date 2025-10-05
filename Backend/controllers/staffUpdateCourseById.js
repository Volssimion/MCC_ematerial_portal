const {
  fetchCourseById,
  updateCourseById,
} = require("../services/staffService");

async function fetchCourse(req, res) {
  try {
    const courseID = req.params.courseID;
    if (!courseID)
      return res.status(400).json({ message: "Missing course ID" });

    const course = await fetchCourseById(courseID);
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Failed to fetch course" });
  }
}

async function updateCourse(req, res) {
  try {
    const courseID = req.params.courseID;
    const data = req.body;

    if (!courseID)
      return res.status(400).json({ message: "Missing course ID" });

    await updateCourseById(courseID, data);

    res.json({ message: "Course updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message || "Failed to update course" });
  }
}

module.exports = { fetchCourse, updateCourse };
