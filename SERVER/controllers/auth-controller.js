//In an Express.js application a 'controller' refer to a part of your code that is responsible for handling the application's logic . Controllers are typically used to process incoming request , interact with models and send response back to clients . They help organize your application by separating concerns and following the MVC design patterns

const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const home = async (req, res) => {
  try {
    res.status(200).send("Hello Ankita");
  } catch (error) {
    console.log("error");
  }
};

//User registration logic
// 1. Get the registration data
// 2. check the email existance
// 3 . Hash the password
// 4. create a new User with hashed password
// 5. Save to database
// 6. Respond => Registration succesfull

const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    //hash the password
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });

    res.status(200).send({ userCreated });
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};
module.exports = { home, register };
