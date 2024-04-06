import React from "react";
import logo from "./../assets/images/amazon-logo.png";
import "./../CSS/header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((state) => state.amazon);

  const cartQuantity = cart?.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Amazon Logo" className="header-logo" />
      </Link>
      <div className="header-search">
        <input type="text" className="header-search-input" />
        <button className="header-search-btn">Search</button>
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-line-one">Hello, Sign in</span>
          <span className="header-option-line-two">Account & Lists</span>
        </div>
        <div className="header-option">
          <span className="header-option-line-one">Returns</span>
          <span className="header-option-line-two">& Orders</span>
        </div>
      </div>

      <div className="header-option-basket">
        <Link to="/cart">
          <span class="material-symbols-outlined">shopping_cart</span>
          <span className="header-option-line-two header-basket-count">
            {cartQuantity}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
