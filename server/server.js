const express = require("express");

const app = express();

app.use("/feed", require("./sportsfeed.js"));

app.listen(3001, () => {
  console.log("server is listening on  127.0.0.1:3001");
});

// https://opengraph.io/api/1.1/site/https%3A%2F%2Fsports.ndtv.com/tennis/emma-raducanu-out-of-french-open-wimbledon-after-surgery-4003065#rss-sports-tennis%2Fwiki?app_id=f6ef4e6b-4162-40d7-8404-b80736d4bd55
