import React, { useState } from "react";
import "./App.css";

function App() {
  const [pid, setPid] = useState("");
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const total = Number(price) * Number(quantity);

  let discountPercentage = 0;

  if (total < 2000) {
    discountPercentage = 15;
  } 
  else if (total >= 2000 && total < 50000) {
    discountPercentage = 21;
  } 
  else {
    discountPercentage = 31;
  }

  const discount = (total * discountPercentage) / 100;

  const gst = ((total - discount) * 18) / 100;

  const finalBill = total - discount + gst;

  return (
    <div className="container">
      <h1>Product Invoice</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Product ID"
          value={pid}
          onChange={(e) => setPid(e.target.value)}
        />

        <input
          type="text"
          placeholder="Product Name"
          value={pname}
          onChange={(e) => setPname(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <h2>Invoice Details</h2>

      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Discount</th>
            <th>GST (18%)</th>
            <th>Final Bill</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{pid}</td>
            <td>{pname}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{total.toFixed(2)}</td>
            <td>
              {discount.toFixed(2)} ({discountPercentage}%)
            </td>
            <td>{gst.toFixed(2)}</td>
            <td>{finalBill.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => window.print()}>
        Print Invoice
      </button>
    </div>
  );
}

export default App;
