import axios from "axios";

// ✅ Axios instance create kar rahe hain
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // apna backend ka base url daalo
  timeout: 10000, // request timeout (optional)
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor (agar token add karna ho)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // yaha token store hai
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor (error handle karne ke liye)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Please login again.");
      // logout ya redirect karna ho toh yaha likho
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
