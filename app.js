const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./src/mongoose/index");
const errorHandler = require("./src/middlware/errorHandler");
const { APP_Constant } = require("./src/constant/Constant");

connectDB();

const PORT = APP_Constant.PORT || 8001;

app.use(express.json());
app.use("/api/contact", require("./src/route/index"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
