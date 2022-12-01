import React from "react";
import { useParams } from "react-router-dom";
import { DataGuitar } from "../Data";
import { useState } from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";

const BuyNow = () => {
  const [Cart, setCart] = useState("Add to Cart");

  const proid = useParams();
  const proDetail = DataGuitar.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (Cart === "Add to Cart") {
      dispatch(addItem(product));
      setCart("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCart("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product mt-0 text-warning">
            <img src={product.img} alt={product.title} className="buynowimg" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="title display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="price my-4 text-warning">{product.price}</h2>
            <p className="desc lead fw-bold text-secondary ">{product.desc}</p>
            <p className="desc1 text-warning fw-bold lead">Ưu đãi:</p>
            <p className="desc lead fw-bold text-secondary">{product.pro1}</p>
            <p className="desc lead fw-bold text-secondary">{product.pro2}</p>
            <p className="desc lead fw-bold text-secondary">{product.pro3}</p>
            <p className="desc lead fw-bold text-secondary">{product.pro4}</p>
            <button
              onClick={() => handleCart(product)}
              className="buton btn btn-outline-warning my-5 rounded-pill"
            >
              {Cart}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNow;
