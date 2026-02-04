// ✅ Get JWT token
export const getToken = () => {
  return localStorage.getItem("token");
};

// ✅ Get normalized role (ROLE_ADMIN → ADMIN)
export const getRole = () => {
  const role = localStorage.getItem("role");
  if (!role) return null;

  return role.startsWith("ROLE_") ? role.replace("ROLE_", "") : role;
};

// ✅ Check authentication
export const isAuthenticated = () => {
  return !!getToken();
};

// ✅ Logout safely (clears everything)
export const logout = () => {
  localStorage.clear();
  window.location.replace("/login");
};
