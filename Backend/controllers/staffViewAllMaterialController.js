const { getAllMaterialByUserId } = require("../services/materialService");

async function fetchAllMaterials(req, res) {
  try {
    const user_id = req.params.user_id;
    if (!user_id) {
      return res.status(400).json({ error: "Missing the User_id" });
    }
    const materials = await getAllMaterialByUserId(user_id);
    res.json(materials);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database Query failed" });
  }
}

module.exports = fetchAllMaterials;
