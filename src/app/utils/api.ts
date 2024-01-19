// utils/api.ts
import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users", // Replace with your API endpoint
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers if needed
  },
});

export default api;
