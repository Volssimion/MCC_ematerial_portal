const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const userRoute = require("./routes/Student");
const staffRoute = require("./routes/Staff");

app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/student", userRoute);
app.use("/staff", staffRoute);

module.exports = app;
