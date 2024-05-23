const express = require("express");
const app = express();
const router = require("./router/auth-router");
//Mount the router: To use the router in your main Express , you cannot "mount" it at a specific URL prefix

app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
const PORT = 1800;
app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
