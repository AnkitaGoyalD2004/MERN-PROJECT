const express = require("express");
const router = express.Router();
const home = require("../controllers/auth-controller");
// router.get("/", (req, res) => {
//   res.status(200).send("Hello World");
// });

// router.get: Sets up a route handler for HTTP GET requests. "/" : Define the route path , responding to the Root URL.

//(req , res) => {...} : An arrow function handling the request (req) and constructing the response(res).

router.route("/").get(home);

router.route("/register").get((req, res) => {
  res.status(200).send("Welcome to register");
});

module.exports = router;
