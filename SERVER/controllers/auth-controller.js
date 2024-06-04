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

    // //hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
      // password: hash_password,
    });
    return res.status(200).send({
      msg: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id > toString(),
    });
  } catch (error) {
    return res.status(400).send({ msg: "page not found" });
  }
};

//User login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(200).json({
        msg: "login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};

module.exports = { home, register, login };
