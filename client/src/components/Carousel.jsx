import React from "react";
import CL1 from "../assets/cl1.png";
import AC6 from "../assets/ac6.png";
import E2 from "../assets/e2.png";
import E3 from "../assets/e3.png";
import CL3 from "../assets/cl3.png";
import CL4 from "../assets/cl4.png";
import "../style/style.css";
import { BsCartFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <div>
      <div className="container p-1 py-3 mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="fw-bold text-warning">BEST SELLER</h1>
            <hr />
          </div>
        </div>
      </div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div class="carousel-inner justify-content-around">
          <div class="carousel-item active text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={CL1} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-warning fw-bold">
                  CORDOBA 55FCE NEGRA - ZIRICOTE W/C
                </h5>
                <p class="text-dark mt-2 ms-4 fs-5 fw-bold">
                  50,640,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={AC6} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-warning fw-bold">
                  TAYLOR AD17E
                </h5>
                <p class="text-dark mt-2 ms-3 fs-5 fw-bold">
                  42,000,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={E2} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-warning fw-bold">
                  FENDER SQUIER HSS
                </h5>
                <p class="text-dark mt-2 ms-3 fs-5 fw-bold">
                  9,320,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={CL3} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-warning fw-bold">
                  TAKAMINE TC135SC
                </h5>
                <p class="text-dark mt-2 ms-3 fs-5 fw-bold">
                  41,570,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={E3} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-warning fw-bold">
                  FENDER WPPG SBT
                </h5>
                <p class="text-dark mt-2 ms-2 fs-5 fw-bold">
                  10,720,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>

          <div class="carousel-item text-center my-3 py-3">
            <div class="my-5 py-2 ">
              <img src={CL4} class="cardd" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title mt-1 text-warning fw-bold">
                  TAKAMINE GC3
                </h5>
                <p class="text-dark mt-2 ms-2 fs-5 fw-bold">
                  6,290,000đ
                  <span className="bd_left"></span>
                  <NavLink to="/cart" className="yud">
                    <BsCartFill className="cart" />
                  </NavLink>
                  <span className="bd_left"></span>
                  <AiFillHeart className="heart" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
