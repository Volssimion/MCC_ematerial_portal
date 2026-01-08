const db = require("../config/DatabaseConnection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (user_id, password) => {
  try {
    // Correct async query syntax for mysql2/promise
    const [results] = await db.query("SELECT * FROM users WHERE user_id = ?", [
      user_id,
    ]);

    if (!results || results.length === 0) {
      throw new Error("User not found");
    }

    const user = results[0];

    // Compare passwords
    const match = await bcrypt.compare(password, user.password);

    if (!match) throw new Error("Incorrect password");

    // Generate JWT
    const token = jwt.sign(
      { user_id: user.user_id, role: user.user_role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "8h" }
    );

    return { user, token };
  } catch (err) {
    console.error("LoginUser error:", err);
    throw err;
  }
};

module.exports = { loginUser };
