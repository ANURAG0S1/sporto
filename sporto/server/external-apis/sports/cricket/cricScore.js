const axios = require("axios").default;
const of = require("rxjs");
// URL for request, to fetch the eCricScore

require("dotenv").config({ path: require("find-config")(".env") });

function getCricScore() {
  axios
    .get(`https://api.cricapi.com/v1/cricScore?apikey=${process.env.CRICKEY}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return of(error);
    });
}

module.exports = getCricScore;
