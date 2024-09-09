const dotenv = require('dotenv').config();

const APP_Constant = {
     TWILIO_ACCOUNT :  process.env.TWILIO_ACCOUNT_SID || 'asdfgh',
     TWILIO_AUTH_TOKEN : process.env.TWILIO_AUTH_TOKEN || 'wertyui',
     TWILIO_FROM_NUMBER : process.env.TWILIO_FROM_NUMBER || '234567erty',
     PORT: process.env.PORT,
     MONGODB_URL: process.env.MONGODB_URL
}

const DB_NAME = "puneEventRegistration"
module.exports = {
     APP_Constant,
     DB_NAME
 };

