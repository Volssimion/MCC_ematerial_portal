// utils/hashPasswords.js
import bcrypt from "bcrypt";
import db from "../config/DatabaseConnection.js"; // ES module import
import dotenv from "dotenv";

dotenv.config();

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;

async function hashPasswords() {
  try {
    // Fetch all users
    const [users] = await db.query("SELECT user_id, password FROM users");

    for (let user of users) {
      // Skip empty or already hashed passwords (optional check)
      if (!user.password) continue;

      const hashedPassword = await bcrypt.hash(user.password, saltRounds);

      // Update user password in DB
      await db.query("UPDATE users SET password = ? WHERE user_id = ?", [
        hashedPassword,
        user.user_id,
      ]);

      console.log(`Password hashed for user_id: ${user.user_id}`);
    }

    console.log("All passwords hashed successfully!");
    process.exit(0); // Exit script
  } catch (err) {
    console.error("Error hashing passwords:", err);
    process.exit(1);
  }
}

// Run the function
hashPasswords();
