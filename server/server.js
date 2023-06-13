const express = require("express");

var cors = require("cors");
var app = express();

app.use(cors());

app.use("/feed", require("./sportsfeed.js"));
app.use("/live",  require("./liveScore.js"));
app.use("/searchImage",  require("./utils/imageSearch/imageSearch.js"));
app.use("/auth",() =>require("./utils/auth/auth.js"));

app.listen(3001, () => {
  console.log("server is listening on  127.0.0.1:3001");
});
