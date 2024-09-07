const express = require('express')
const router = express.Router()
 const {getContactdetail, createContactdetail, sendSms, verifyOtp, getUserContactdetail} = require('../Controller/index')

//get contact details
router.route('/').get(getContactdetail)

//create contact deatils request
router.route('/').post(createContactdetail)

//otp message

router.route('/send_otp').post(sendSms)


 //verify otp
 router.route('/verifyv_otp').post(verifyOtp)

 //
 router.route('/get_user_list').get(getUserContactdetail)




module.exports = router


