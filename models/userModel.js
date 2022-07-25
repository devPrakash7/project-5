const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "fname is required"],
      lowercase: true,
    },
    lname: {
      type: String,
      required: [true, "lname is required"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    profileImage: {
      type: String,
      required: [true, "profileImage is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      min: 8,
      max: 15,
    },

    address: {
      shipping: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        pincode: { type: Number, required: true },
      },
      billing: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        pincode: { type: Number, required: true },
      },
    },
  },

  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
