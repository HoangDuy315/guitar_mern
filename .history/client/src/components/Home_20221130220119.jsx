import React from "react";
import Product from "./Product";
import Staff from "./Staff";
import "../index.css";
import About from "./About";
import Contact from "./Contact";
import Carousel from "./Carousel";
import "../style/style.css";
import FE from "../assets/fender.png";
import JA from "../assets/jackson.png";
import CH from "../assets/charvel.png";
import CO from "../assets/cordoba.png";
import TA from "../assets/takamine.png";
import TAN from "../assets/tanglewood.png";
import TAY from "../assets/taylor.png";
import SHIP from "../assets/ship.png";
import { FaMedal } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div id="home" class="d-flex ">
        <div class="container d-flex align-items-center">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <h1 class="display-1 fw-bolder text-white text-center">
                BRINGING MUSIC TO<span class="text-warning"> EVERYONE</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
      <Product />
      <div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 text-center py-4 my-4">
              <h1 className="fw-bold text-warning fs-2">WHAT WE SERVE</h1>
              <hr />
            </div>
          </div>
          <div className="row fw-bold fs-4">
            <div className="col-md 5 d-flex justify-content-center">
              <img
                src={SHIP}
                alt="Contact us"
                className="ctact2"
                height="300px"
                width="400px"
              />
            </div>
            <div className="col-md-6 ">
              <p className="fs-3 fw-bolder mt-5 text-secondary">
                Just sit back at home we will
                <span className="text-warning"> Take care</span>
              </p>
              <br />
              <p className="text-warning ">
                <ul className="serve fs-4">
                  <li className="mt-3">
                    <FaShippingFast className="icon" />
                    Nationwide delivery with cheapest cost.
                  </li>
                  <li className="mt-3">
                    <MdLocationOn className="icon" />
                    Expanding showroom system widely.
                  </li>
                  <li className="mt-3">
                    <HiShieldCheck className="icon" />
                    Warranty at showrooms
                  </li>
                  <li className="mt-3">
                    <FaMedal className="icon" />
                    Genuine imported product
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Staff />
      <About />
      <div className="container mb-1">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1 className="fw-bold text-warning fs-2">FEATURED BRANDS</h1>
            <hr />
          </div>
        </div>
        <div className="row fw-bold text-warning">
          <div className="symbol0 col-md-6 d-flex justify-content-around">
            <img src={TA} className="symbol ms-4 " alt="about us" />
            <img src={TAN} className="symbol ms-4 " alt="about us" />
            <img src={TAY} className="symbol ms-4 " alt="about us" />
            <img src={FE} className="symbol ms-4 " alt="about us" />
            <img src={JA} className="symbol ms-4 " alt="about us" />
            <img src={CH} className="symbol ms-4 " alt="about us" />
            <img src={CO} className="symbol ms-4 " alt="about us" />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
