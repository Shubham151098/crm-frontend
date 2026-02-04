import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Welcome to CRM System</h1>
      <p>Select role and login to continue</p>

      <button style={styles.button} onClick={() => navigate("/login")}>
        Go to Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f6f8",
  },
  button: {
    marginTop: "20px",
    padding: "12px 30px",
    fontSize: "16px",
    cursor: "pointer",
    background: "#060561",
  },
};

export default Welcome;
