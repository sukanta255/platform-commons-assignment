import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import CataloguePage from "./components/CataloguePage";
import CartPage from "./components/CartPage";
import products from "./components/assets/products.json";
import ConfirmOrderPage from "./components/ConfirmOrderPage";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  // check "Add to Cart" button is disabled or not
  const [addToCartDisabled, setAddToCartDisabled] = useState(false);

  // for product added to cart
  const handleAddToCart = (product, quantity) => {
    // Disable the "Add to Cart" button when multiple clicks
    setAddToCartDisabled(true);

    // Check whether the product is in the cart or not
    const existingProduct = cartProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update it
      const updatedCart = cartProducts.map((p) =>
        p.id === existingProduct.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCartProducts(updatedCart);

    } else {
      // Ans if the product is not in the cart, add it with the quantity of the product
      const newProduct = { ...product, quantity };
      setCartProducts([...cartProducts, newProduct]);
    }

    setTimeout(() => {
      setAddToCartDisabled(false);
    }, 1000);
  };

    // for remove product from cart
    const handleRemoveCart = (productToRemove) => {
      const updatedCart = cartProducts.filter(
        (product) => product.id !== productToRemove.id
      );
      setCartProducts(updatedCart);
    };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <CataloguePage
                products={products}
                onAddToCart={handleAddToCart}
                addToCartDisabled={addToCartDisabled}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                products={cartProducts}
                removeCart={handleRemoveCart}
              />
            }
          />
          <Route
            path="/confirm-order"
            element={<ConfirmOrderPage products={cartProducts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
