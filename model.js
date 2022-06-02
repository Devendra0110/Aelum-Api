const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {type: String,required: true,},
    email: {type: String,required: true,},
    dob: {type: String,required: true,},
    address: {type: String,required: true,},
    contactNumber: {type: {
        countryCode: {type: String,required: true,},
        phoneNumber: {type: String,required: true,},
    },required: true,},
  });

  const User = mongoose.model("User", UserSchema);

  module.exports = User;
