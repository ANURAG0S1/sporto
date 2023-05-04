const { default: axios } = require("axios");
const express = require("express");
const urls = require("./urls.js");

const app = express();

app.use("/sport", require("./sports.js"));

app.listen(3001, () => {
  console.log("server is listening on  127.0.0.1:3001");
});
