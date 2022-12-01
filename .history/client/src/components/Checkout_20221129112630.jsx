import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../style/style.css";

const Checkout = () => {
  const history = useHistory();

  const state = useSelector((state) => state.addItem);

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
          <small className="text-muted">{item.name}</small>
        </div>
        <span className="text-muted">{item.price}</span>
      </li>
    );
  };

  const handleSubmit = async (event) => {
    window.alert("Checkout successfully!");
    history.push("/");
    window.location.reload();
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-warning fw-bold ms-1 my-2">Your Cart</span>
              <span className="badge bg-warning rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="total list-group mb-3">
              {state.map(itemList)}
              <li className=" list-group-item d-flex justify-content-between">
                <span>Total(Vnđ)</span>
                <strong>{total}</strong>
              </li>
            </ul>

            <form className="p-2" onSubmit={handleSubmit}>
              <div className="input-group">
                <button
                  type="submit"
                  className="redeem btn btn-outline-warning rounded-pill"
                >
                  Check Out
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3 fw-bold fs-3 text-warning">Billing address</h4>
            <form className="needs-validation was-validated" novalidate="">
              <div className="row g-3">
                <div className="col-12">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label for="email" className="form-label">
                    Email <span className="text-muted"></span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label for="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-md-5">
                  <label for="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country" required="">
                    <option value="">Choose...</option>
                    <option>Vietname</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label for="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>Ho Chi Minh</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3 fw-bold fs-3 text-warning">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" for="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label for="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label for="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label for="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
