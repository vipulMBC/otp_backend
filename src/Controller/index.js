const asyncHandler = require("express-async-handler");
const contact = require("../model/mongooseShema");
const Twilio = require("twilio");
const { APP_Constant } = require("../constant/Constant");
//get contact details
// @api get /api/contact
const getContactdetail = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "this is get" });
});

//create contact details
// @api post /api/contact

const sendSms = asyncHandler(async (req, res) => {});

const createContactdetail = asyncHandler(async (req, res) => {
  // console.log("APP_Constant", APP_Constant.TWILIO_ACCOUNT)
  const { name, email, number } = req.body;
  if (!name || !email || !number) {
    res.status(400);
    throw new Error("all field mandotry");
  }

  let user = {};
  user = await contact.findOne({ number });

  let otp = Math.floor(Math.random() * 90000) + 10000;

  const client = Twilio(
    APP_Constant.TWILIO_ACCOUNT,
    APP_Constant.TWILIO_AUTH_TOKEN
  );

  const textContent = {
    body: `your otp is ${otp}`,
    to: `+91-${number}`,
    from: APP_Constant.TWILIO_FROM_NUMBER,
  };

  let contactData;

  if (!!user) {
    user.name = name;
    user.email = email;
    user.otp = otp;
    contactData = await user.save();
    await client.messages.create(textContent).then((message) => {
      res.status(201).json(contactData);
    });
  } else {
    contactData = await contact.create({
      name,
      email,
      number,
      otp,
    });

    await client.messages.create(textContent).then((message) => {
      res.status(201).json(contactData);
    });
  }
});

const verifyOtp = asyncHandler(async (req, res) => {
  const { otp, number } = req.body;

  if (!otp || !number) {
    res.status(400);
    throw new Error("Please enter correct otp");
  }

  let user = {};
  user = await contact.findOne({ number });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  if (Number(otp) == Number(user?.otp)) {
    user.isVerified = true;
    await user.save();
    res.status(200).json(user);
  } else {
    res.status(400).json({ message: "Somthing went wrong" });
  }
});

const getUserContactdetail = asyncHandler(async (req, res) => {
  let user = {};
  let isVerified = true;
  user = await contact.findOne(isVerified);

  if (!!user) {
    res.status(200).json([user]);
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
});

module.exports = {
  getContactdetail,
  createContactdetail,
  verifyOtp,
  sendSms,
  getUserContactdetail,
};
