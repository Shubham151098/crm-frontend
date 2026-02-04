import axiosInstance from "./axiosInstance";


// ✅ CREATE USER
export const createUser = (userData) =>
  axiosInstance.post("/api/admin/users", userData);

// 👥 Users
export const getAllUsers = async () => {
  const response = await axiosInstance.get("/api/admin/users");
  return response.data;
};

// 🏢 Clients
export const getAllClients = async () => {
  const response = await axiosInstance.get("/api/admin/clients");
  return response.data;
};

// 📊 Dashboard stats
export const getDashboardStats = async () => {
  const response = await axiosInstance.get("/api/admin/dashboard");
  return response.data;
};
