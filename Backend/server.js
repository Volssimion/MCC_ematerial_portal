const express = require("express");
const app = express();
const port = 5000;
const db = require("./config/DatabaseConnection");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/user/getcourse", async (req, res) => {
  try {
    const { program_id, year, sem, batch } = req.query;

    if (!program_id || !year || !sem || !batch) {
      return res.status(400).json({ error: "Missing query parameters" });
    }

    const sql = `
      SELECT * FROM course
      WHERE program_id = ? AND year = ? AND sem = ? AND batch = ?
    `;

    const [rows] = await db.query(sql, [program_id, year, sem, batch]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});
app.get("/user/getmaterials/:courseID", async (req, res) => {
  try {
    const { courseID } = req.params;

    if (!courseID) {
      return res.status(400).json({ error: "Missing courseID parameter" });
    }

    const sql = `SELECT * FROM material WHERE course_id = ? ORDER BY created_at DESC`;

    const [rows] = await db.query(sql, [courseID]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});

app.listen(port, (err) => {
  console.log(`Server is running at port ${port}`);
});
