import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import { useState } from "react";

function AddProduct() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (name === "" || price === "") {
      alert("Please enter product name and price");
      return;
    }

    dispatch(
      addProduct({
        id: Date.now(),
        name: name,
        price: price
      })
    );

    // Clear inputs after adding
    setName("");
    setPrice("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginLeft: "5px" }}
      />

      <br />

      <button onClick={handleAdd} style={{ marginTop: "10px" }}>
        ➕ Add Product
      </button>
    </div>
  );
}

export default AddProduct;
