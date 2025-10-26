const getUser = require("../services/userService");

async function fetchUserById(req, res) {
  try {
    const user_id = req.params.user_id;
    if (!user_id) {
      return res.status(400).json({ error: `Missing ID params` });
    }

    const user = await getUser(user_id);
    return res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: ` Database Query Failed` });
  }
}

module.exports = fetchUserById;
