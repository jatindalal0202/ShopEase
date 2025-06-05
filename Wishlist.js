import React from "react";

function Wishlist({ wishlist, moveToCart }) {
  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>
          <button onClick={() => moveToCart(item)}>Move to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;