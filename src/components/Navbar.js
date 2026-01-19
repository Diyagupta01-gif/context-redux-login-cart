import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar({ setPage }) {
  const { logout } = useContext(AuthContext);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "15px"
    }}>
      <button onClick={() => setPage("products")}>Products</button>
      <button onClick={() => setPage("cart")}>Cart</button>
      <button onClick={() => setPage("profile")}>Profile</button>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
