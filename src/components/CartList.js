import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./../CSS/cartlist.css";
import { removeFromCart } from "../redux/amazonCreateSlice";

const CartList = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.amazon);
  console.log(cart);
  const removeItemFromCart = (id) => {
    console.log(id);
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cart?.length === 0 && <h1>Your Cart is Empty</h1>}
      {cart?.map((item) => (
        <div className="cart-item">
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100px" }}
            className="cart-item-image"
          />
          <div className="item-details">
            <div>{item.title}</div>
            <div>Price: {item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <p> Total : {item.price * item.quantity}</p>
            <button
              className="cart-remove-item-button"
              onClick={() => removeItemFromCart(item.id)}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
      <p>
        Total Amount:{" "}
        {cart?.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </p>
    </div>
  );
};

export default CartList;
