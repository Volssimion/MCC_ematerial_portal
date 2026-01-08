const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const studentRoute = require("./routes/Student");
const staffRoute = require("./routes/Staff");
const userRoute = require("./routes/User");
const authRoutes = require("./routes/authRoutes.js");

app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/student", studentRoute);
app.use("/staff", staffRoute);
app.use("/user", userRoute);
app.use("/auth", authRoutes);

module.exports = app;
