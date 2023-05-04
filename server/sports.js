const { default: axios } = require("axios");
const express = require("express");
const urls = require("./urls.js");

const route = express.Router();

route.get("/:sport", async (req, res) => {
  console.log(req.params);
  let resp = { data: { items: "" }, success: false };
  try {
    resp = await axios.get(urls.xmlTojson + urls[req.params.sport]);
  } catch (error) {
    console.log(error);
  }

  res.send(JSON.stringify({ data: resp.data.items, success: true }));
});

module.exports = route;
