const express = require("express");
const router = express.Router();

const createCourseController = require("../controllers/staffCourseCreation");
const viewAllCourseByID = require("../controllers/staffViewCourseController");

router.get("/getAllCourses/:user_id", viewAllCourseByID);
router.post("/createCourse", createCourseController);

module.exports = router;
