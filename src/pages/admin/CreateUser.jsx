import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import "./CreateUser.css";

function CreateUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    userRole: "MANAGER",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await axiosInstance.post("/api/admin/users", form);

      setMessage("✅ User created successfully");

      setForm({
        name: "",
        email: "",
        password: "",
        userRole: "MANAGER",
      });
    } catch (err) {
      console.error(err);
      setError("❌ Failed to create user");
    }
  };

  return (
    <div className="create-user-page">
      <div className="create-user-card">
        <h2>Create New User</h2>
        <p className="subtitle">Add a new user to the CRM system</p>

        {message && <div className="success-msg">{message}</div>}
        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              placeholder="Enter full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>User Role</label>
            <select
              name="userRole"
              value={form.userRole}
              onChange={handleChange}
            >
              <option value="ADMIN">Admin</option>
              <option value="MANAGER">Manager</option>
              <option value="GRAPHICDESIGNER">Graphic Designer</option>
              <option value="VIDEOEDITOR">Video Editor</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            ➕ Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;