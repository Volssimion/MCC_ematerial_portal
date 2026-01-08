const jwt = require("jsonwebtoken");

// Async token verification middleware
const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(403).json({ message: "Access denied" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Access denied" });

    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(
        token,
        process.env.JWT_SECRET || "mySecretKey",
        (err, decoded) => {
          if (err) return reject(err);
          resolve(decoded);
        }
      );
    });

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Async role-based protection middleware
const authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    try {
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Not authorized" });
      }
      next();
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  };
};

module.exports = {
  verifyToken,
  authorizeRoles,
};
