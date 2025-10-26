const multer = require("multer");
const path = require("path");

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder to save files
  },
  filename: function (req, file, cb) {
    // Prepend timestamp to original name to avoid collisions
    const uniquePrefix = Date.now() + "-";
    cb(null, uniquePrefix + file.originalname);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /pdf|doc|docx|ppt|pptx/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, Word, and PPT files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});

// Middleware to attach original name to request body
const attachOriginalName = (req, res, next) => {
  if (req.file) {
    req.body.original_name = req.file.originalname; // send original name to controller
  }
  next();
};

module.exports = { upload, attachOriginalName };
