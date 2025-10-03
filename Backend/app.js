const express = require("express");
const app = express();
const cors = require("cors");

const userRoute = require("./routes/Student");
const staffRoute = require("./routes/Staff");

app.use(cors());
app.use(express.json());

app.use("/student", userRoute);
app.use("/staff", staffRoute);

module.exports = app;
