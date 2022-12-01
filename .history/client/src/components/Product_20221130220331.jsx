import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { DataGuitar } from "../Data";
import "../style/style.css";

const Product = () => {
  const cardItem = (item) => {
    return (
      <div
        class="card border-1 my-4 py-3"
        key={item.id}
        style={{ width: " 18rem" }}
      >
        <img src={item.img} class="img card-img-top" alt="" />
        <div class="card-body text-center">
          <h5 class="card-title fw-bold">{item.title}</h5>
          <p className="lead card-text text-warning">{item.price}</p>
          <NavLink
            to={`/products/${item.id}`}
            class="buynoww btn btn-outline-warning rounded-pill"
          >
            Buy now
          </NavLink>
          <NavLink to="/cart">
            <a href="/cart" class="ms-2 btn btn-outline-secondary rounded-pill">
              <BsFillCartFill />
            </a>
          </NavLink>
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
      <ul className="page-number">
        <li className="next-page-number">1</li>
        <li className="next-page-number">2</li>
        <li className="next-page-number">></li>
      </ul>
    </div>
  );
};

export default Product;
