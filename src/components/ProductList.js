import React from "react";
import { products } from "./../common/common.helper";
import ProductItem from "./ProductItem";
import "./../CSS/productlist.css";

const ProductList = () => {
  return (
    <div className="productList">
      <h1>Products</h1>
      <div className="product-list-container">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
