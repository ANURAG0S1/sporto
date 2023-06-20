import axios from 'axios';

// Set base URL for your API if needed
axios.defaults.baseURL = 'https://api.example.com';

// Set headers or authentication tokens if needed
axios.defaults.headers.common['Authorization'] = 'Bearer your-token';

// Add interceptors for request/response
axios.interceptors.request.use((config) => {
  // Modify request config or add headers before sending the request
  return config;
}, (error) => {
  // Handle request error
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  // Process response data before resolving
  return response;
}, (error) => {
  // Handle response error
  return Promise.reject(error);
});

export default axios;
