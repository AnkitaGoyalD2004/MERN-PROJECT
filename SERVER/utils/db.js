const mongoose = require("mongoose");

const URL = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("connected to MongoDb");
  } catch (error) {
    console.log(error);
    console.error("database connection failed");
  }
};

module.exports = connectDB;
