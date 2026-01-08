const { loginUser } = require("../services/authService");

const login = async (req, res) => {
  try {
    const { user_id, password } = req.body;

    if (!user_id || !password) {
      return res.status(400).json({ message: "User ID and password required" });
    }

    const { user, token } = await loginUser(user_id, password);

    res.status(200).json({
      message: "Login successful",
      user: {
        user_id: user.user_id,
        name: user.user_name,
        role: user.user_role,
        department_id: user.department_id,
        program_id: user.program_id,
      },
      token,
    });
  } catch (err) {
    res.status(401).json({ message: err.message || "Authentication failed" });
  }
};

module.exports = { login };
