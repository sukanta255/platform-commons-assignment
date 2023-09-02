import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import "./style/CataloguePage.css";
import {FaShoppingCart} from "react-icons/fa"

const CataloguePage = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2>Catalogue Page</h2>
      <div className="cart-icon">
        <Link to="/cart"><FaShoppingCart/></Link>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Product
            className="product"
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
export default CataloguePage;
