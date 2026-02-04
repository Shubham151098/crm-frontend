import LogoutButton from "../components/LogoutButton";
import Sidebar from "../components/Sidebar";

function DesignerDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: 20 }}>
        <h2>Graphic Designer Dashboard 🎨</h2>
      </div>
    </div>
  );
}

export default DesignerDashboard;