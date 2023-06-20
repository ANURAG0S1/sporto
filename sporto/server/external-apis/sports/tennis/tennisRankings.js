const axios = require("axios");

const options = {
  method: "GET",
  url: "https://sportscore1.p.rapidapi.com/tennis-rankings/wta",
  params: { page: "1" },
  headers: {
    "X-RapidAPI-Key": "e99b9c1003mshcaab9a2dabae1a9p1c1000jsn034628e486e3",
    "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
