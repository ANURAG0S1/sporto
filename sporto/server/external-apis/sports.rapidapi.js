const axios = require("axios");
const fs = require("fs");
require("dotenv").config({ path: require("find-config")(".env") });

//football tennis basket ball

const options = {
  method: "GET",
  url: "https://sportscore1.p.rapidapi.com/sports/football",
  params: { page: "1" },
  headers: {
    "X-RapidAPI-Key": "e99b9c1003mshcaab9a2dabae1a9p1c1000jsn034628e486e3",
  },
};

async function get() {
  try {
    const response = await axios.request(options);

    fs.writeFileSync(
      "./tmp/" + new Date() + "test.json",
      JSON.stringify(response.data)
    );
  } catch (error) {
    console.error(error);
  }
}

get();
