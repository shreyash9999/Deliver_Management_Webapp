import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log(process.env.MONGODB_URI, {});
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Consider a more graceful exit strategy for production
  }
};

export default ConnectDB;
// process.env.MONGODB_URI, {}