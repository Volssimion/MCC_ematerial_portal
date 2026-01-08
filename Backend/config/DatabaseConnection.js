const dotenv = require("dotenv");
const mysql = require("mysql2/promise");

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "ematerial_portal",
});

(async () => {
  try {
    const connection = await db.getConnection();
    console.log("MySQL server is runninggg daaa");
    connection.release();
  } catch (e) {
    console.log("MySQL Connection failed", e);
  }
})();

module.exports = db;
