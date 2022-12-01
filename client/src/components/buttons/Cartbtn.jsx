import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cartbtn.css";

const Cartbtn = () => {
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <NavLink to="/cart" className="cartbtn btn btn-outline-warning">
        <span className="iconcart fa fa-shopping-cart me-1">
          ({state.length})
        </span>
      </NavLink>
    </>
  );
};

export default Cartbtn;
