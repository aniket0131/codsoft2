import axios from 'axios';

// Create an axios instance with default configuration
export const axiosInstance = axios.create({
  withCredentials: true, // Include credentials with requests
});

// Function to handle API requests
export const apiconnector = (method, url, bodyData = null, headers = {}, params = null) => {
  console.log('API Connector Call:', method, url, bodyData, headers, params); // Debug logging

  return axiosInstance({
    method,
    url,
    data: bodyData,
    headers,
    params,
  })
    .then(response => {
      console.log('API Connector Response:', response); // Debug logging
      return response;
    })
    .catch(error => {
      console.error('API Connector Error:', error); // Debug logging
      // Extract useful information from the error object
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      throw error;
    });
};
