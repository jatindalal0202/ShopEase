import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (item) => {
    if (!cart.find(product => product.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const addToWishlist = (item) => {
    if (!wishlist.find(product => product.id === item.id)) {
      setWishlist([...wishlist, item]);
    }
  };

  const moveToCart = (item) => {
    addToCart(item);
    setWishlist(wishlist.filter(i => i.id !== item.id));
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/cart">Cart ({cart.length})</Link> |{" "}
        <Link to="/wishlist">Wishlist ({wishlist.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} addToWishlist={addToWishlist} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} moveToCart={moveToCart} />} />
      </Routes>
    </div>
  );
}

export default App;