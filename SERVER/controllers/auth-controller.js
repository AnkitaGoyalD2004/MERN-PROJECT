//In an Express.js application a 'controller' refer to a part of your code that is responsible for handling the application's logic . Controllers are typically used to process incoming request , interact with models and send response back to clients . They help organize your application by separating concerns and following the MVC design patterns

const home = async (req, res) => {
  try {
    res.status(200).send("Hello Abhita");
  } catch (error) {
    console.log("error");
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to the Registration page");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};
module.exports = { home, register };
