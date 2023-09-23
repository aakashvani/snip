const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      require: [true, "Please enter your full name"],
      minLength: [1, "Name must be at least 2-3 characters"],
    },
    email: {
      type: String,
      require: [true, "Please enter your email address"],
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      require: [true, "Please enter a strong password"],
      validate: validator.isPassword,
      minLength: [8, "Password must be at least 8 characters"],
      select: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
