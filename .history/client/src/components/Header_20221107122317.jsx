import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/logo1.png";
import "../style/style.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm border-light">
        <div className="container-fluid py-1">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div
            className="collapse navbar-collapse show"
            id="navbarSupportedContent"
          >
            <a class="navbar-brand fs-5 text-warning" href="/">
              <img src={LOGO} alt="Logo" className="logo" />
            </a>
            <ul className="kkk navbar-nav me-2 px-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light fw-bold"
                  aria-current="page"
                  to="/"
                >
                  <div className="hihi">Home</div>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-light fw-bold" to="/products">
                  <div className="hihi">Product</div>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-light fw-bold" to="/staff">
                  <div className="hihi">Staff</div>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-light fw-bold" to="/about">
                  <div className="hihi">About</div>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-light fw-bold" to="/contact">
                  <div className="hihi">Contact</div>
                </NavLink>
              </li>
            </ul>
            {/* <NavLink className="navbar-brand mx-auto fw-bold text-warning fs-4" to="/">GNAHYUD</NavLink> */}

            <NavLink className="login text-warning" to="/login">
              Login
            </NavLink>

            {/* Cart */}
            <div className="">
              <NavLink
                to="/cart"
                className="btn btn-outline-warning rounded-pill ms-2"
              >
                <span className="fa fa-shopping-cart me-1"></span>
              </NavLink>
            </div>
            {/* Cart */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
