const express = require("express");
const router = express.Router();
const authContollers = require("../controllers/auth-controller");
// router.get("/", (req, res) => {
//   res.status(200).send("Hello World");
// });

// router.get: Sets up a route handler for HTTP GET requests. "/" : Define the route path , responding to the Root URL.

//(req , res) => {...} : An arrow function handling the request (req) and constructing the response(res).

router.route("/").get(authContollers.home);
router.route("/register").post(authContollers.register);
//when we have to add something then we use the POST method
module.exports = router;
