import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import "./../CSS/productlist.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsRequest } from "../redux/amazonCreateSlice";

const ProductList = () => {
  const { products, loading, error } = useSelector((state) => state.amazon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  return (
    <div className="productList">
      <h1>Products</h1>
      {error && <h1>{error}</h1>}
      <div className="product-list-container">
        {!loading ? (
          products.map((product) => <ProductItem product={product} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default ProductList;
