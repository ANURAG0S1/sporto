import React, { useState } from 'react';
import axios from 'axios';

function ImageSearch() {
  const [query, setQuery] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSearch = async () => {
    try {
      // Encode the search query for the URL
      const encodedQuery = encodeURIComponent(query);

      // Make a GET request to the server endpoint
      const response = await axios.get(`/searchImage?query=${encodedQuery}`);

      // Get the image URL from the server response
      const imageURL = response.data;

      // Update the state with the image URL
      setImageURL(imageURL);
    } catch (error) {
      console.error('Error fetching image URL:', error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {imageURL && <img src={imageURL} alt="Search Result" />}
    </div>
  );
}

export default ImageSearch;
