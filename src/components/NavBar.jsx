import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-bottom border-dark bg-white sticky-top"
        style={{
          zIndex: 1000,
        }}
      >
        <div className="container-fluid px-3 px-md-5">
          {/* Logo */}
          <div className="logo">
            <h1 className="m-0">
              <span className="fw-semibold" style={{ color: "#009FFF" }}>
                Algo
              </span>
              Visualizer
            </h1>
          </div>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link px-lg-3" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/Categories">
                  Categories
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/About">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
