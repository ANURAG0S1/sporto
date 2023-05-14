// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
//
let scrapeUrl = "https://www.twitter.com";
const url = `https://opengraph.io/api/1.1/scrape/${scrapeUrl}?app_id=${process.env.OPENGRAPH_KEY}`;

require("dotenv").config({ path: require("find-config")(".env") });

console.log(process.env.OPENGRAPH_KEY);

const axios = require("axios");

//football tennis basket ball

const options = {
  method: "GET",
  url: url,
  params: { page: "1" },
  headers: {
    "X-RapidAPI-Key": "e99b9c1003mshcaab9a2dabae1a9p1c1000jsn034628e486e3",
  },
};

async function get() {
  try {
    const response = await axios.request(options);

    // fs.writeFileSync(
    //   "./tmp/" + new Date() + "test.json",
    //   JSON.stringify(response.data)
    // );
    console.log(response, "reposneeee");
  } catch (error) {
    console.error(error);
  }
}

get();

// Sample opengraph config data
// {
//     "hybridGraph": {
//       "title": "Example Title",
//       "description": "Example Description",
//       "type": "Example Type",
//       "image": "https://example.com/image.png",
//       "url": "https://example.com",
//       "favicon": "https://example.com/favicon.ico",
//       "site_name": "Example Site Name",
//       "articlePublishedTime": "2023-03-23T00:00:00.000Z",
//       "articleAuthor": "https://example.com/author"
//     },
//     "openGraph": {
//       "title": "Example Title",
//       "description": "Example Description",
//       "type": "Example Type",
//       "image": {
//         "url": "https://example.com/image.png"
//       },
//       "url": "https://example.com",
//       "site_name": "Example Site Name",
//       "articlePublishedTime": "2023-03-23T00:00:00.000Z",
//       "articleAuthor": "https://example.com/author"
//     },
//     "htmlInferred": {
//       "title": "Example Title",
//       "description": "Example Description",
//       "type": "Example Type",
//       "image": "https://example.com/image.png",
//       "url": "https://example.com",
//       "favicon": "https://example.com/favicon.ico",
//       "site_name": "Example Site Name",
//       "images": [
//         "https://example.com/image1.png",
//         "https://example.com/image2.png",
//         "https://example.com/image3.png",
//         "https://example.com/image4.png"
//       ]
//     },
//     "requestInfo": {
//       "redirects": 1,
//       "host": "https://example.com",
//       "responseCode": 200,
//       "cache_ok": true,
//       "max_cache_age": 432000000,
//       "accept_lang": "en-US,en;q=0.9",
//       "url": "https://example.com",
//       "full_render": false,
//       "use_proxy": false,
//       "use_premium": false,
//       "responseContentType": "text/html; charset=utf-8"
//     },
//     "accept_lang": "en-US,en;q=0.9",
//     "is_cache": false,
//     "url": "https://example.com"
//   }
