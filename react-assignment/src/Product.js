import React, { useState } from "react";

function Product(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="product-card">
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>

      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default Product;