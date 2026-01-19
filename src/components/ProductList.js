import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProductList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { role } = useContext(AuthContext);

  return (
    <div>
      <h3>🛒 Product List</h3>

      {products.length === 0 && <p>No products available</p>}

      {products.map((p) => (
        <div className="product" key={p.id}>
          <span>
            {p.name} - ₹{p.price}
          </span>

          <div>
            {/* USER ACTION */}
            {role === "user" && (
              <button onClick={() => dispatch(addToCart(p))}>
                Add to Cart
              </button>
            )}

            {/* ADMIN ACTION */}
            {role === "admin" && (
              <button onClick={() => dispatch(removeProduct(p.id))}>
                Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
