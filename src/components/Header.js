import React from "react";
import logo from "./../assets/images/amazon-logo.png";
import "./../CSS/header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Amazon Logo" className="header-logo" />

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
        <i class="fa-regular fa-cart-shopping"></i>
        <span className="header-option-line-two header-basket-count">0</span>
      </div>
    </div>
  );
};

export default Header;
