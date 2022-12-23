import React from "react";
import "./Checkout.css";
import checkout from "../checkout/card_img.png";
import {  useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Checkout = ({data}) => {
  const userID = localStorage.getItem("userId");
  const [user, setUser] = useState();
  useEffect(() => {

    fetch(`${process.env.REACT_APP_API}/api/getoneuser/`+ userID, {
      method: "GET"
    })
    .then(res => res.json())
    .then(res => {
      setUser(res)
    })


  },[])



  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API}/api/updateUser/` + userID, {
      method: "PUT",
      body: JSON.stringify({ Cart: [] }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          alert("Đặt hàng thành công !");
          navigate("/cart", { replace: true });
          window.location.reload();

        } else alert(`${res.message}`);
      });
  }
  return (
    <div className="checkout">
      <div className="container">
        <h2 className="header">CHECKOUT</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <h3 className="title">billing</h3>
              <div className="inputBox">
                <span>Full name: </span>
                <input type="text" required placeholder="type full name" />
              </div>
              <div className="inputBox">
                <span>Email: </span>
                <input type="email" required placeholder="example@example.com" />
              </div>
              <div className="inputBox">
                <span>Address: </span>
                <input type="text" required placeholder="type Address" />
              </div>
              <div className="inputBox">
                <span>City: </span>
                <input type="text" required placeholder="ex:HCM City" />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>state: </span>
                  <input type="text" required placeholder="Vietnam" />
                </div>
                <div className="inputBox">
                  <span>Zip code: </span>
                  <input type="text" required placeholder="123 456" />
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
                <input type="text" required placeholder="type full name" />
              </div>

              <div className="inputBox">
                <span>Credit card number: </span>
                <input type="number" required placeholder="1111-2222-3333-4444" />
              </div>
              <div className="inputBox">
                <span>Exp month: </span>
                <input type="text" required placeholder="january" />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <span>Exp year: </span>
                  <input type="text" required placeholder="2022" />
                </div>
                <div className="inputBox">
                  <span>CVV: </span>
                  <input type="text" required placeholder="535" />
                </div>
              </div>
            </div>
          </div>
          <input type="submit" value="Payment" className="submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
