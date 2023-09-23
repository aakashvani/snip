const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");

// Register a User
exports.handleSignUp = catchAsyncErrors(async (req, res, next) => {
  const { fullName, email, password } = req.body;

  try {
    const user = await User.create({ fullName, email, password });

    res.status(200).json({
      success: true,
      message: `User ${fullName} signed up successfully`,
      user: user,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Login.message
// Logout
// Forgot Password
// Reset Password
// Get User Detail
// update User password
// update User Profile
