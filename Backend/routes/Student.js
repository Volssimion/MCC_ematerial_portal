const express = require("express");
const router = express.Router();

const getCourse = require("../controllers/studentCourseController");
const getMaterials = require("../controllers/studentmaterialController");

router.get("/getcourse", getCourse);
router.get("/getmaterials/:courseID", getMaterials);

module.exports = router;
