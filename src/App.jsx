import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AllUsers from "./pages/admin/AllUsers";
import CreateUser from "./pages/admin/CreateUser";
import Managers from "./pages/admin/Managers";
import Employees from "./pages/admin/Employees";
import Clients from "./pages/admin/Clients";
import AddClient from "./pages/admin/AddClient";

import ManagerDashboard from "./pages/ManagerDashboard";
import GraphicDesignerDashboard from "./pages/DesignerDashboard";
import VideoEditorDashboard from "./pages/EditorDashboard";

import PrivateRoute from "./routes/PrivateRoute";
import { isAuthenticated, getRole } from "./utils/auth";

function App() {
  const role = getRole();

  const redirectByRole = () => {
    switch (role) {
      case "ADMIN":
        return "/admin/dashboard";
      case "MANAGER":
        return "/manager/dashboard";
      case "GRAPHICDESIGNER":
        return "/designer/dashboard";
      case "VIDEOEDITOR":
        return "/editor/dashboard";
      default:
        return "/login";
    }
  };

  return (
    <Routes>
      {/* 🔓 LOGIN */}
      <Route
        path="/login"
        element={
          isAuthenticated() ? (
            <Navigate to={redirectByRole()} replace />
          ) : (
            <Login />
          )
        }
      />

      {/* 🔐 ADMIN */}
      <Route
        path="/admin"
        element={
          <PrivateRoute role="ADMIN">
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AllUsers />} />
        <Route path="users/create" element={<CreateUser />} />
        <Route path="managers" element={<Managers />} />
        <Route path="employees" element={<Employees />} />

        {/* ✅ FIXED CLIENT ROUTES */}
        <Route path="clients" element={<Clients />} />
        <Route path="add-client" element={<AddClient />} />
      </Route>

      {/* 🔐 MANAGER */}
      <Route
        path="/manager/dashboard"
        element={
          <PrivateRoute role="MANAGER">
            <ManagerDashboard />
          </PrivateRoute>
        }
      />

      {/* 🎨 DESIGNER */}
      <Route
        path="/designer/dashboard"
        element={
          <PrivateRoute role="GRAPHICDESIGNER">
            <GraphicDesignerDashboard />
          </PrivateRoute>
        }
      />

      {/* 🎬 VIDEO EDITOR */}
      <Route
        path="/editor/dashboard"
        element={
          <PrivateRoute role="VIDEOEDITOR">
            <VideoEditorDashboard />
          </PrivateRoute>
        }
      />

      {/* 🔁 FALLBACK */}
      <Route
        path="*"
        element={
          isAuthenticated() ? (
            <Navigate to={redirectByRole()} replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
