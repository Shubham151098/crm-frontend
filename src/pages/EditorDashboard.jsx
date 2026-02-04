import LogoutButton from "../components/LogoutButton";
import Sidebar from "../components/Sidebar";

function EditorDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: 20 }}>
        <h2>Video Editor Dashboard 🎬</h2>
      </div>
    </div>
  );
}

export default EditorDashboard;