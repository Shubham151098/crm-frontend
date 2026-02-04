import LogoutButton from "../components/LogoutButton";
import Sidebar from "../components/Sidebar";

function ManagerDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: 20 }}>Welcome Manager 👋</div>
    </div>
  );
}

export default ManagerDashboard;
