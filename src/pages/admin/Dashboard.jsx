import { useEffect, useState } from "react";
import { getDashboardStats } from "../../api/adminApi";

function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardStats()
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load dashboard stats", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (!stats) return <p>No data available</p>;

  return (
    <div style={{ display: "flex" }}>
      {/* <Sidebar /> */}

      <div style={{ padding: "20px", flex: 1 }}>
        <h2>📊 Admin Dashboard</h2>

        <div className="cards">
          <p>👥 Users: {stats.totalUsers}</p>
          <p>🏢 Clients: {stats.totalClients}</p>
          <p>📝 Content: {stats.totalContent}</p>
          <p>⏳ Pending: {stats.pendingContent}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
