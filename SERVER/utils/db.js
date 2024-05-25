const mongoose = require("mongoose");

const URL = process.env.URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Hello");
    console.log("connected to MongoDb");
  } catch (error) {
    console.error("database connection failed");
  }
};

module.exports = connectDB;
