const { createCourse } = require("../services/staffService");

async function createCourseController(req, res) {
  try {
    const result = await createCourse(req.body);
    res.status(201).json({
      message: "course created successfully",
      result,
    });
  } catch (err) {
    console.error("Error Creating course", err);
    res.status(500).json({ message: "Failed to create Course" });
  }
}

module.exports = createCourseController;
