const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const createCourseController = require("../controllers/staffCourseCreation");
const fetchAllCourseByID = require("../controllers/staffViewCourseController");
const fetchMaterialByID = require("../controllers/staffvViewMaterialByID");
const deleteMaterial = require("../controllers/staffDeleteMatreialById");
const deleteCourse = require("../controllers/staffDeleteCourseById");
const { uploadMaterial } = require("../controllers/materialController");

router.get("/getMaterialById/:courseID", fetchMaterialByID);
router.get("/getAllCourses/:user_id", fetchAllCourseByID);
router.post("/createCourse", createCourseController);
router.post("/uploadMaterial", upload.single("material_doc"), uploadMaterial);
router.delete("/deleteMaterialById/:id", deleteMaterial);
router.delete("/deleteCourseById/:id", deleteCourse);

module.exports = router;
