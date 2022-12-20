import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="container">
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
        </div>
      </form>
    </div>
  );
};

export default Checkout;
