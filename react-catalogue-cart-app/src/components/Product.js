import React, { useState } from "react";

const Product = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    const newQuantity = quantity +1;
    onAddToCart(product, newQuantity);
    setQuantity(newQuantity);
  };

  return (
    <div className="product-card">
      <img src={product.Image} alt={product.Name} />
      <h3>{product.Name}</h3>
      <p>Weight: {product.Weight}</p>
      <p>Price: ₹ {product.Price}</p>
      {quantity === 0 ? (
        <button onClick={addToCart}>Add to cart</button>
      ) : (
        <div>
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
          {quantity}
          <button onClick={addToCart} disabled={quantity >= 6}>+</button>
        </div>
      )}
    </div>
  );
};

export default Product;
