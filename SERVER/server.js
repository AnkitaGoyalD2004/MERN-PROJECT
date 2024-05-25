require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utils/db.js");

//use of Middleware
app.use(express.json());
//This line of code adds Express middleware that parses incoming request bodies with JSON payloads . It's important to place this before any routes that need to handle JSON data in the req body . This middleware is responsible for parsing JSON data from requests , and it should be applied at the beganing of your middleware stack to ensure it's available for all subsequent route handler.

//Mount the router: To use the router in your main Express , you cannot "mount" it at a specific URL prefix

//
app.use(router);

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World");
// });

const PORT = 1800;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at PORT : ${PORT}`);
  });
});
