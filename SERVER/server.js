const express = require("express");
const app = express();

// app.get: Sets up a route handler for HTTP GET requests. "/" : Define the route path , responding to the Root URL.

//(req , res) => {...} : An arrow function handling the request (req) and constructing the response(res).

//res.send("HEllO WORLD") : Sends the HELLO WORLD message as a response when the route ius accessed
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
const PORT = 1800;
app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
