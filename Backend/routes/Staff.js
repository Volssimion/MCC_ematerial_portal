const express = require("express");
const router = express.Router();
const { upload, attachOriginalName } = require("../middleware/upload");

const createCourseController = require("../controllers/staffCourseCreation");
const fetchAllCourseByID = require("../controllers/staffViewCourseController");
const fetchMaterialByID = require("../controllers/staffvViewMaterialByID");
const deleteMaterialById = require("../controllers/deleteMaterialById");
const deleteCourse = require("../controllers/staffDeleteCourseById");
const uploadMaterial = require("../controllers/materialController");
const downloadMaterial = require("../controllers/downloadMaterialController");
const {
  fetchMaterialById,
  editMaterial,
} = require("../controllers/updateMaterialController");
const {
  fetchCourse,
  updateCourse,
} = require("../controllers/staffUpdateCourseById");
const fetchAllMaterials = require("../controllers/staffViewAllMaterialController");

router.get("/getMaterialById/:courseID", fetchMaterialByID);
router.get("/getAllCourses/:user_id", fetchAllCourseByID);
router.get("/fetchMaterial/:materialID", fetchMaterialById);
router.get("/fetchCourse/:courseID", fetchCourse);
router.get("/fetchAllmaterials/:user_id", fetchAllMaterials);
router.get("/downloadMaterial/:materialID", downloadMaterial);

router.post("/createCourse", createCourseController);
router.post(
  "/uploadMaterial",
  upload.single("material_doc"),
  attachOriginalName,
  uploadMaterial
);

router.put("/updateCourseById/:courseID", updateCourse);
router.put(
  "/updateMaterial/:materialID",
  upload.single("material_doc"),
  attachOriginalName,
  editMaterial
);

router.delete("/deleteMaterialById/:id", deleteMaterialById);
router.delete("/deleteCourseById/:id", deleteCourse);

module.exports = router;
