import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/logo1.png";
import "../style/style.css";
import Cartbtn from "./buttons/Cartbtn";

const Header = (props) => {
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
          </div>

          {props.auth ? (
            <>
              <NavLink className="login text-warning" to="/login">
                Login
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="logout text-warning" to="/logout">
                Logout
              </NavLink>
            </>
          )}
          {/* <Cartbtn /> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
