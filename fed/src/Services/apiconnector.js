import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
});

export const apiconnector = (method, url, bodyData, headers, params) => {
  console.log("API Connector Call:", method, url, bodyData, headers, params); // Debug logging
  return axiosInstance({
    method: method,
    url: url,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : {},
    params: params ? params : null,
  })
  .then(response => {
    console.log("API Connector Response:", response); // Debug logging
    return response;
  })
  .catch(error => {
    console.error("API Connector Error:", error); // Debug logging
    throw error;
  });
};
