import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getRole, logout } from "../utils/auth";
import "./Sidebar.css";

function Sidebar() {
  // ✅ Role is already normalized in auth.js
  const role = getRole(); // ADMIN | MANAGER | GRAPHICDESIGNER | VIDEOEDITOR

  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2 className="logo">CRM</h2>

      <nav>
        {/* ================= ADMIN ================= */}
        {role === "ADMIN" && (
          <>
            <NavLink to="/admin/dashboard" className="nav-item">
              📊 Dashboard
            </NavLink>

            {/* User Management */}
            <div className="nav-item" onClick={() => toggleMenu("users")}>
              👥 User Management
            </div>
            {openMenu === "users" && (
              <div className="sub-menu">
                <NavLink to="/admin/users" className="sub-item">
                  All Users
                </NavLink>
                <NavLink to="/admin/managers" className="sub-item">
                  Managers
                </NavLink>
                <NavLink to="/admin/employees" className="sub-item">
                  Employees
                </NavLink>
                <NavLink to="/admin/users/create" className="sub-item">
                  Create User
                </NavLink>
              </div>
            )}

            {/* Client Management */}
            <div className="nav-item" onClick={() => toggleMenu("clients")}>
              🏢 Client Management
            </div>
            {openMenu === "clients" && (
              <div className="sub-menu">
                <NavLink to="/admin/clients" className="sub-item">
                  Clients
                </NavLink>
                <NavLink to="/admin/add-client" className="sub-item">
                  Add Client
                </NavLink>
              </div>
            )}

            {/* Content Management */}
            <div className="nav-item" onClick={() => toggleMenu("content")}>
              📝 Content Management
            </div>
            {openMenu === "content" && (
              <div className="sub-menu">
                <NavLink to="/admin/content" className="sub-item">
                  All Content
                </NavLink>
                <NavLink to="/admin/create-content" className="sub-item">
                  Create Content
                </NavLink>
                <NavLink to="/admin/scheduled" className="sub-item">
                  Scheduled
                </NavLink>
              </div>
            )}

            <NavLink to="/admin/reports" className="nav-item">
              📈 Reports
            </NavLink>

            <NavLink to="/admin/settings" className="nav-item">
              ⚙️ Settings
            </NavLink>
          </>
        )}

        {/* ================= MANAGER ================= */}
        {role === "MANAGER" && (
          <>
            <NavLink to="/manager/dashboard" className="nav-item">
              📊 Dashboard
            </NavLink>
            <NavLink to="/manager/clients" className="nav-item">
              🏢 Clients
            </NavLink>
            <NavLink to="/manager/content" className="nav-item">
              📝 Content Sheet
            </NavLink>
            <NavLink to="/manager/assign" className="nav-item">
              👥 Assign Tasks
            </NavLink>
            <NavLink to="/manager/calendar" className="nav-item">
              🗓️ Schedule
            </NavLink>
          </>
        )}

        {/* ================= GRAPHIC DESIGNER ================= */}
        {role === "GRAPHICDESIGNER" && (
          <>
            <NavLink to="/designer/dashboard" className="nav-item">
              🎨 Dashboard
            </NavLink>
            <NavLink to="/designer/tasks" className="nav-item">
              📝 Design Tasks
            </NavLink>
            <NavLink to="/designer/uploads" className="nav-item">
              📤 Upload Designs
            </NavLink>
            <NavLink to="/designer/history" className="nav-item">
              📁 Work History
            </NavLink>
            <NavLink to="/designer/profile" className="nav-item">
              👤 Profile
            </NavLink>
          </>
        )}

        {/* ================= VIDEO EDITOR ================= */}
        {role === "VIDEOEDITOR" && (
          <>
            <NavLink to="/editor/dashboard" className="nav-item">
              🎬 Dashboard
            </NavLink>
            <NavLink to="/editor/tasks" className="nav-item">
              📝 Video Tasks
            </NavLink>
            <NavLink to="/editor/uploads" className="nav-item">
              📤 Upload Videos
            </NavLink>
            <NavLink to="/editor/history" className="nav-item">
              📁 Work History
            </NavLink>
            <NavLink to="/editor/profile" className="nav-item">
              👤 Profile
            </NavLink>
          </>
        )}

        {/* ================= LOGOUT ================= */}
        <button onClick={handleLogout} className="nav-item logout">
          🚪 Logout
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
