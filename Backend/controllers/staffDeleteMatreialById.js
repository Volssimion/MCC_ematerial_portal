const { deleteMaterialById } = require("../services/staffService");

async function deleteMaterial(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "missing material id paramter" });
    }
    const material = await deleteMaterialById(id);
    res.json(material);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "database query failed" });
  }
}

module.exports = deleteMaterial;
