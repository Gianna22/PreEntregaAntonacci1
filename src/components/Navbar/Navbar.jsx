import React from "react";
import CartWidget from "../CartWidgets/CartWidgets";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Inciar sesion
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Contactanos <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <CartWidget />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;