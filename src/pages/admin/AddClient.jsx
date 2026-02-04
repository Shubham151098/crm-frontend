import { useState } from "react";
import { createClient } from "../../api/clientApi";
import { useNavigate } from "react-router-dom";

function AddClient() {
  const [clientName, setClientName] = useState("");
  const [monthlyPostCount, setMonthlyPostCount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createClient({
      clientName,
      monthlyPostCount: Number(monthlyPostCount),
    });

    navigate("/admin/clients");
  };

  return (
    <div>
      <h2>Add Client</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Monthly Post Count"
          value={monthlyPostCount}
          onChange={(e) => setMonthlyPostCount(e.target.value)}
          required
        />

        <button type="submit">Create Client</button>
      </form>
    </div>
  );
}

export default AddClient;
