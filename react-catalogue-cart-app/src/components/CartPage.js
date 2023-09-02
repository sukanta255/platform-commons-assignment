import React from "react";
import { Link } from "react-router-dom";
import "./style/CartPage.css";

const CartPage = ({ products, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Cart Page</h2>
      <div className="cart-icon">
        <Link to="/confirm-order">
          <button>Checkout</button>
        </Link>
      </div>
      {products.length === 0 ? (
        <img className="cartIsEmpty" src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg" alt="EmptyCartImage"/>
      ) : (
        <div className="product-list product-cart">
          {products.map((product) => (
            <div key={product.id}>
              <img className="image" src={product.Image} alt="productImage" />
              <p>{product.Name}</p>
              <p>Price: ₹{product.Price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => onRemoveFromCart(product)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CartPage;
