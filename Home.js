import React from "react";

function Home({ products, addToCart, addToWishlist }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>₹ {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => addToWishlist(product)}>Wishlist</button>
        </div>
      ))}
    </div>
  );
}

export default Home;