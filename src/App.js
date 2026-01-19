import Login from "./components/Login";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./App.css";

function App() {
  const { isLoggedIn, role } = useContext(AuthContext);

  return (
    <div className="app-container">
      <h2>lOGIN PAGE</h2>

      <Login />

      {isLoggedIn && (
        <>
          <ProductList />
          {role === "admin" && <AddProduct />}
        </>
      )}
    </div>
  );
}

export default App;
