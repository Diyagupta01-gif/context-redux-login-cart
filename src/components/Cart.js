import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div>
      <h3>🛒 Cart</h3>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div className="product" key={item.id}>
          <span>
            {item.name} - ₹{item.price}
          </span>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <h4 style={{ marginTop: "15px" }}>
          Total: ₹{total}
        </h4>
      )}
    </div>
  );
}

export default Cart;
