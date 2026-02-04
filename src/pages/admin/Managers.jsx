import { useEffect, useState } from "react";
import axios from "axios";

const Managers = () => {
  const [managers, setManagers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchManagers();
  }, []);

  const fetchManagers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8080/api/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const users = response.data;

      // ✅ CORRECT FILTER
      const managerList = users.filter(
        (user) => user.userRole === "MANAGER"
      );

      setManagers(managerList);
    } catch (error) {
      console.error("Error fetching managers", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h3>Loading managers...</h3>;

  return (
    <div>
      <h2>Managers</h2>

      {managers.length === 0 ? (
        <p>No managers found</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.userRole}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Managers;
