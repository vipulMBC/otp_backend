const mongoose = require('mongoose');


const contactShema = mongoose.Schema({
    number: {
        type: Number,
        required: [true, '']
      },
    name:{
        type: String,
        required: [true, 'Please add the name']
    },

    email:{
        type: String,
        required: [true, 'Please add the email']
    },
    
    otp: {
        type: Number,
        required: [false, '']
      },
      isVerified :{
        type: Boolean,
        required: [false, '']
      }
    
},
{
    timestamps: true
})

 


module.exports = mongoose.model('Contact', contactShema)