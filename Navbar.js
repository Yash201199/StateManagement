import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg   navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="">
          <span className="navbar">{props.title}</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link " to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Registration
            </NavLink>
          </li>
        </ul>
        </div>
        </div>
        <NavLink  to="/users/add" className="btn btn-outline-light  mx-4 btn-sm">Add-User</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
