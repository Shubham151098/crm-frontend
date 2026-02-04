import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/adminApi";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((res) => setUsers(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>All Users</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.userId}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.userRole}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
