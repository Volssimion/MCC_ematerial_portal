const { viewMaterialByID } = require("../services/staffService");

async function fetchMaterialByID(req, res) {
  try {
    const courseID = req.params.courseID;
    if (!courseID) {
      return res.status(400).json({ message: "Missing courseId parameter" });
    }
    const material = await viewMaterialByID(courseID);
    res.json(material);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database query Failed" });
  }
}

module.exports = fetchMaterialByID;
