import React, { Component } from "react";
import logo from "./logo--mightifier.png";
import "./Header.scss";
import SideNav from "./SideNav";
import NavBar from "./NavBar";

class Header extends Component {
  render() {
    return (

        <nav
          className="navbar navbar-expand-lg navbar-dark bg-mighty fixed-top"
          id="mainNav"
        >
          <a className="navbar-brand" href="index.html">
            <img
              className="img-fluid navbar-logo"
              src={logo}
              alt="Mightifier"
            />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <SideNav />
            <NavBar />
          </div>
        </nav>

    );
  }
}

export default Header;
