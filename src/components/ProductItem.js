import React from "react";
import "./../CSS/productitem.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/amazonCreateSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const addtoCartRequest = () => {
    dispatch(addToCart(product));
  };

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
        <button
          className="product-card-button"
          onClick={() => addtoCartRequest()}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
