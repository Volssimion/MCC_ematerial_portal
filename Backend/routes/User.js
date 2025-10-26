const express = require("express");
const router = express.Router();

const fetchUserById = require("../controllers/fetchUserController");

router.get("/getuser/:user_id", fetchUserById);

module.exports = router;
