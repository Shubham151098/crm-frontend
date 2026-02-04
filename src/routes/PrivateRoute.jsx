import { Navigate } from "react-router-dom";
import { getToken, getRole } from "../utils/auth";

const PrivateRoute = ({ children, role }) => {
  const token = getToken();
  const userRole = getRole(); // ADMIN

  if (!token || !userRole) {
    return <Navigate to="/login" replace />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
