const axios = require('axios');
const cheerio = require('cheerio');
const express = require("express");



// Function to fetch image URL from Google
async function fetchImageURLFromGoogle(query) {
  try {
    // Encode the search query for the URL
    const encodedQuery = encodeURIComponent(query);
    
    // Make a GET request to Google Images
    const response = await axios.get(`https://www.google.com/search?q=${encodedQuery}&tbm=isch`);
    
    // Load the response HTML using Cheerio
    const $ = cheerio.load(response.data);
    console.log($)
    console.log(findStringInCheerioResponse($))
    // Extract the URL of the first image from the search results
    const imageURL = $
    
    return 'imageURL';
  } catch (error) {
    console.error('Error fetching image URL:', error);
    throw error;
  }
}



function findStringInCheerioResponse(inputString) {
    console.log('inputString',inputString._root.children)
    const regex = /data([\s\S]*?) in cheerio response/;
    const match = regex.exec(inputString);
  
    if (match && match.length > 1) {
      return match[1];
    }
  
    return null;
  }



 

require("dotenv").config({ path: require("find-config")(".env") });

const route = express.Router();

route.get("/:query", async (req, res) => {

try {
    let response =  await fetchImageURLFromGoogle(req.query);
    res.send(response)
} catch (error) {
    console.log(error)
    res.end('something went wrong')
}
});

module.exports = route;

// // Usage example
// const searchQuery = 'cats';

// fetchImageURLFromGoogle(searchQuery)
//   .then(imageURL => {
//     console.log('Image URL:', imageURL);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
