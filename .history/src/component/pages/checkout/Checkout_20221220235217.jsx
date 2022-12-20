import React from "react";
import "./Checkout.css";
import checkout from "../checkout/card_img.png";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="container">
        <h2>Checkout</h2>
        <form action="">
          <div className="row">
            <div className="col">
              <h3 className="title">billing</h3>
              <div className="inputBox">
                <span>Full name: </span>
                <input type="text" placeholder="type full name" />
              </div>
              <div className="inputBox">
                <span>Email: </span>
                <input type="email" placeholder="example@example.com" />
              </div>
              <div className="inputBox">
                <span>Address: </span>
                <input type="text" placeholder="type Address" />
              </div>
              <div className="inputBox">
                <span>City: </span>
                <input type="text" placeholder="ex:HCM City" />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>state: </span>
                  <input type="text" placeholder="Vietnam" />
                </div>
                <div className="inputBox">
                  <span>Zip code: </span>
                  <input type="text" placeholder="123 456" />
                </div>
              </div>
            </div>

            {/* payment */}

            <div className="col">
              <h3 className="title">Payment</h3>

              <div className="inputBox">
                <span>Cards accepted: </span>
                <img src={checkout} alt="" />
              </div>
              <div className="inputBox">
                <span>Name on card: </span>
                <input type="text" placeholder="type full name" />
              </div>

              <div className="inputBox">
                <span>Credit card number: </span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div className="inputBox">
                <span>Exp month: </span>
                <input type="text" placeholder="january" />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>Exp year: </span>
                  <input type="text" placeholder="2022" />
                </div>
                <div className="inputBox">
                  <span>CVV: </span>
                  <input type="text" placeholder="535" />
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="proceed to checkout"
            className="submit-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
