const db = require("../config/DatabaseConnection");

async function getUser(user_id) {
  const sql = `
    SELECT 
        u.user_id,
        u.user_name,
        u.user_image,
        u.user_role,
        d.department_name,
        p.program_name,
        p.program_stream
    FROM users u
    JOIN department d ON u.department_id = d.department_id
    JOIN program p ON u.program_id = p.program_id
    WHERE u.user_id = ?;
  `;
  const [rows] = await db.query(sql, [user_id]);

  return rows[0] || null;
}

module.exports = getUser;
