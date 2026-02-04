import { useEffect, useState } from "react";
import { getClients } from "../../api/clientApi";

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients()
      .then((res) => setClients(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Clients</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client Name</th>
            <th>Monthly Posts</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => (
            <tr key={c.clientId}>
              <td>{c.clientId}</td>
              <td>{c.clientName}</td>
              <td>{c.monthlyPostCount}</td>
              <td>{c.active ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
