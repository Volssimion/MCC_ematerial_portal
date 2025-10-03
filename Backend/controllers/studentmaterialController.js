const { getMaterialsByCourse } = require("../services/studentService");

async function getMaterials(req, res) {
  try {
    const { courseID } = req.params;

    if (!courseID) {
      return res.status(400).json({ error: "Missing courseID parameter" });
    }

    const materials = await getMaterialsByCourse(courseID);
    res.json(materials);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
}

module.exports = getMaterials;
