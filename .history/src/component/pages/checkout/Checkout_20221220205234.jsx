import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="container">
      <div className="left">
        <h3>BILLING ADDRESS</h3>
        <form>
          Full Name
          <input type="text" name="" placeholder="type full name" />
          Email
          <input type="text" name="" placeholder="type Email" />
          Address
          <input type="text" name="" placeholder="type Address" />
          City
          <input type="text" name="" placeholder="type City" />
          <div>
            <label>
              State
              <select>
                <option value="">Choose State..</option>
                <option value="">HCM City</option>
                <option value="">Hanoi</option>
                <option value="">Da Nang</option>
                <option value="">Can Tho</option>
              </select>
            </label>
            <label>
              Zip code
              <input type="number" name="" placeholder="Zip code" />
            </label>
          </div>
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Checkout;
