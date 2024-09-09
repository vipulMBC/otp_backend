const mongoose = require("mongoose");
const { APP_Constant, DB_NAME } = require("../constant/Constant");
console.log('DB_NAME: ', DB_NAME);

const MONGODB_URL = APP_Constant.MONGODB_URL;
console.log("mongoDbUrl: ", MONGODB_URL);

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connect.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection error", error);
  }
};

module.exports = connectDB;
