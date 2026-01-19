import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  if (isLoggedIn) {
    return (
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      <button onClick={() => login(name, role)}>Login</button>
    </div>
  );
}

export default Login;
