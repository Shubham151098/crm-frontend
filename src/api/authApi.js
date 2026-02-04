import axiosInstance from "./axiosInstance";

export const loginApi = async (loginData) => {
  try {
    const response = await axiosInstance.post(
      "/api/auth/login",
      loginData
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Invalid credentials"
    );
  }
};
