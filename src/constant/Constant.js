const dotenv = require('dotenv').config();

const APP_Constant = {
     TWILIO_ACCOUNT :  process.env.TWILIO_ACCOUNT_SID,
     TWILIO_AUTH_TOKEN : process.env.TWILIO_AUTH_TOKEN,
     TWILIO_FROM_NUMBER : process.env.TWILIO_FROM_NUMBER,
     PORT: process.env.PORT,
     MONGO_URL: process.env.MONGO_URL
}

module.exports = APP_Constant
