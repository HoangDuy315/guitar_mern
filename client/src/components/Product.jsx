import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { DataGuitar } from "../Data";

const Product = () => {
  const cardItem = (item) => {
    return (
      <div class="card border-1 my-4 py-3" style={{ width: " 18rem" }}>
        <img src={item.img} class="card-img-top" alt="" />
        <div class="card-body text-center">
          <h5 class="card-title fw-bold">{item.title}</h5>
          <p className="lead card-text text-warning">{item.price}</p>
          <a href="/BuyNow" class="btn btn-outline-warning rounded-pill">
            Buy now
          </a>
          <a href="/cart" class="ms-2 btn btn-outline-secondary rounded-pill">
            <BsFillCartFill />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container mt-5 py-0">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="fw-bold text-warning">PRODUCT</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container py-0">
        <div className="row justify-content-around">
          {DataGuitar.map(cardItem)}
        </div>
      </div>
    </div>
  );
};

export default Product;
