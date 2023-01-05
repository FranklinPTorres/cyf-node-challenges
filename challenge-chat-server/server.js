const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  res.send(`Hello world my name is ${name} and my message is: ${message}`);
});

app.listen(3000, () => {
  console.log("server 3000");
});
