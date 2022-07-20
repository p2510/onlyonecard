import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-oecci-staging.declarons.com/api/v1'
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
