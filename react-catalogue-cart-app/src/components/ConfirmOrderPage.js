import React from "react";
import "./style/ConfirmOrderPage.css";
import { Link } from "react-router-dom";

const ConfirmOrderPage = ({ products }) => {
  // for calculate the total price of the product order
  const total = products.reduce(
    (accurate, product) => accurate + product.Price * product.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (products.length === 0) {
      alert("No product added, Please add 1 or more Product");
    } else {
      alert("Your Order is successfully placed!");
    }
  };

  return (
    <div>
      <h2>Confirm Order Page</h2>
      <div className="order-summary">
        <h3>Order Details</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.Name} - {product.quantity} x ₹{product.Price.toFixed(2)}{" "}
              = ${(product.quantity * product.Price).toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total Price: ₹ {total.toFixed(2)}</p>
        <p>Estimated Delivery Date: 26/09/2023</p>
      </div>
      <button onClick={handlePlaceOrder} className="placeOrderButton">
        Place Order
      </button>
      <Link to="/">
        <button className="homeButton">Go to Home Page</button>
      </Link>
    </div>
  );
};
export default ConfirmOrderPage;
