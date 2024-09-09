const dotenv = require("dotenv").config();

const APP_Constant = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
  TWILIO_ACCOUNT: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_FROM_NUMBER: process.env.TWILIO_FROM_NUMBER,
};

const DB_NAME = "puneEventRegistration";
module.exports = {
  APP_Constant,
  DB_NAME,
};
