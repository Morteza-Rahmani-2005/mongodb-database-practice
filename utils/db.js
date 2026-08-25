import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return false;
    }
    await mongoose.connect("mongodb://127.0.0.1:27017/practiceApi");
    console.log("Connected!");
  } catch (err) {
    console.log("Error in DB Connection", err);
  }
};

export default connectToDB;
