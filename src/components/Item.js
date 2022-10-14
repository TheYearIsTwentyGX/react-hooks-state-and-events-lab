import React, {useState} from "react";

function Item({ name, category }) {
  const [cartStatus, setInCart] = useState("");
  function toggleCart() {
    setInCart(cartStatus ? "" : "in-cart");
  }
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCart} className="add">{cartStatus ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
