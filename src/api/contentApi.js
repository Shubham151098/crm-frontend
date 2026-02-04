import axiosInstance from "./axiosInstance";

export const getAllContent = () =>
  axiosInstance.get("/api/content");

export const createContent = (data, managerId) =>
  axiosInstance.post(`/api/content/create/${managerId}`, data);

export const updateContentStatus = (id, status) =>
  axiosInstance.put(`/api/content/status/${id}`, { status });
