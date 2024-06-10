import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top mb-4">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>

          <Link to="/" className="navbar-brand">
            <img src="/img/logo.png" alt="Logo" className=" page-scroll brandname" href="home" />
          </Link>

        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li  >
            <Link  to="/">Home</Link>
            </li>
            <li>
            <Link  to="/aboutUs">About Us</Link> 
            </li>
            <li>
            <Link  to="/faq">FAQ</Link>
            </li>
            <li>
            <Link  to="/services">Services</Link> 
            </li>
            <li>
            <Link  to="/gallery">Gallery</Link>
            </li>
            {/* <li>
            <Link to="/testimonials">Testimonials</Link>
            </li> */}
            <li>
            <Link  to="/contact">Contact</Link>
            </li>

            
            </ul>
        </div>
      </div>
    </nav>
  );
};
