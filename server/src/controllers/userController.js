const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const { sendToken } = require("../utils/jwtToken");

// Register a User
exports.handleSignUp = catchAsyncErrors(async (req, res, next) => {
  const { fullName, email, password } = req.body;

  try {
    const user = await User.create({ fullName, email, password });

    sendToken(user, res);

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

// Login
exports.handleLogin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user, res);
  res.status(200).json({
    success: true,
    user,
  });
});

// Logout
exports.handleLogout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Get User Detail
exports.getMyProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

// update User Profile
exports.handleUpdateMyProfile = catchAsyncErrors(async (req, res, next) => {
  const userId = req.params.id;
  const updatedFields = req.body;

  const updateObject = {
    $set: updatedFields,
  };

  try {
    const updatedProfile = await User.findByIdAndUpdate(userId, updateObject, {
      new: true,
    });

    if (!updatedProfile) {
      res.status(400);
      throw new Error("User Not Found");
    }

    res.status(200).json({
      success: true,
      message: "Your Profile got updated successfully",
      updatedProfile,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Forgot Password
// Reset Password
// update User password
