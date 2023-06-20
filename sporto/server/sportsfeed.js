const { default: axios } = require("axios");
const express = require("express");
const urls = require("./urls.js");

// require("dotenv").config({ path: require("find-config")(".env") });

const route = express.Router();

route.get("/:sport", async (req, res) => {
  let resp = { data: { items: "" }, success: false };
  try {
    resp = await axios.get(urls.xmlTojson + urls[req.params.sport]);
    res.send(JSON.stringify({ data: resp.data.items, success: true }));
  } catch (error) {
    console.log(error);
    res.send(error)
  }

});

module.exports = route;
