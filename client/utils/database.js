import mongoose from "mongoose";

let isConnected = false; // for tracking the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "snip",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
