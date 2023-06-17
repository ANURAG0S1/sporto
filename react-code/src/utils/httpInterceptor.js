import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Add authorization header to requests
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Handle common error responses (e.g., unauthorized)
    if (error.response.status === 401) {
      // Redirect or handle unauthorized request
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
