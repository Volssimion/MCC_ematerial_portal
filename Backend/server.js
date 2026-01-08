const app = require("./app.js");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  console.log(`Server is running at port ${port}`);
});
