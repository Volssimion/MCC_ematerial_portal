const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ematerial_portal",
});

(async () => {
  try {
    const connection = await db.getConnection();
    console.log("MySqlserver is running daaaaaa");
    connection.release();
  } catch (e) {
    console.log("MySql Connection failed", e);
  }
})();

module.exports = db;
