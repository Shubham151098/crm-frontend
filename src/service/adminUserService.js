import axios from "axios";

/**
 * Central Axios instance
 */
const API = axios.create({
  baseURL: "http://localhost:8080",
});

/**
 * Attach JWT token automatically
 */
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Global response interceptor
 * ❗ Prevent auto logout on normal navigation
 */
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      console.warn("Unauthorized / Forbidden");
    }
    return Promise.reject(error);
  }
);

/**
 * 🔹 Fetch all users summary
 */
export const fetchAllUsers = () =>
  API.get("/api/admin/users/summary");

/**
 * 🔹 Toggle user active/inactive
 */
export const toggleUserStatus = (userId, active) =>
  API.put(`/api/admin/users/${userId}/status`, { active });
