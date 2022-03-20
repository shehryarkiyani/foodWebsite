import React from "react";
import logo from "../../assets/logo.avif";
import "./styles.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mainHeader">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="navLogo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav navLinks ">
            <a className="nav-link active headerLinks" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link headerLinks" href="#">
              Gallery
            </a>
            <a className="nav-link navButton btn ml-3 mr-3" href="#">
              Order Online
            </a>
            <a className="nav-link header-link cart-icon-link headerLinks" href="#">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count font-weight-bold px-1">0</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
