import React from "react";
import "./../CSS/productitem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-details-container">
        <h3 className="product-card-name">{product.title}</h3>
        <p className="product-card-description">{product.description}</p>
        <p className="product-card-price">Price: {product.price}</p>
        <button className="product-card-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
