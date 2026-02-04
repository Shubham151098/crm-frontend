import { useEffect, useState } from "react";
import {
  fetchAllUsers,
  toggleUserStatus,
} from "../../service/adminUserService";

const headers = [
  "Name",
  "Email",
  "Role",
  "Status",
  "Total",
  "Pending",
  "In Progress",
  "Review",
  "Completed",
  "Action",
];

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  // 🔹 Load users
  const loadUsers = async () => {
    try {
      setLoading(true);
      const res = await fetchAllUsers();
      setUsers(Array.isArray(res.data) ? res.data : []);
      setError("");
    } catch (err) {
      console.error("Failed to load users", err);
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Toggle active / inactive
  const handleToggle = async (userId, newStatus) => {
    try {
      await toggleUserStatus(userId, newStatus);

      // Optimistic UI update
      setUsers((prev) =>
        prev.map((u) =>
          u.userId === userId ? { ...u, active: newStatus } : u
        )
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update user status");
    }
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2>All Users</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={headers.length} align="center">
                No users found
              </td>
            </tr>
          )}

          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <span
                  style={{
                    color: user.active ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {user.active ? "ACTIVE" : "INACTIVE"}
                </span>
              </td>

              <td>{user.totalTasks}</td>
              <td>{user.pendingTasks}</td>
              <td>{user.inProgressTasks}</td>
              <td>{user.reviewTasks}</td>
              <td>{user.completedTasks}</td>

              <td>
                <button
                  onClick={() =>
                    handleToggle(user.userId, !user.active)
                  }
                  style={{
                    backgroundColor: user.active ? "#dc3545" : "#28a745",
                    color: "#fff",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  {user.active ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
