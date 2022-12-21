import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="form">
        <h1 className="heading">Checkout</h1>
        <p className="text">Delivery Address</p>
        <input type="text" name="" id="address" placeholder="address" />
      </div>
    </div>
  );
};

export default Checkout;
