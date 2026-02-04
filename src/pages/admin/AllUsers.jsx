import { useEffect, useState } from "react";
import {
  fetchAllUsers,
  toggleUserStatus,
} from "../../service/adminUserService";
import UserCard from "../../components/UserCard";
import "../../styles/allUsers.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await fetchAllUsers();
      setUsers(Array.isArray(res.data) ? res.data : []);
      setError("");
    } catch {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <p className="loading-text users-page">
        Loading users...
      </p>
    );

  return (
    <div className="users-page">
      <h2 className="page-title">Team Information</h2>

      {error && <p className="error-text">{error}</p>}

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <UserCard
              key={user.userId}
              user={user}
              onToggle={toggleUserStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUsers;
