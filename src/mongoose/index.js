const mongoose = require('mongoose')
const APP_Constant = require('../constant/Constant')

const mongoDbUrl = APP_Constant.MONGO_URL


const connectDB = async () => {
   try{
     const connect = await mongoose.connect(mongoDbUrl)
     console.log("mongodb connected",connect.connection.host, connect.connection.name)

   }catch(error){
    console.log("mongodb connection error", error)
   }
}


module.exports = connectDB; 