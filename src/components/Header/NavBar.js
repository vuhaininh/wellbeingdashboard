import React, { Component } from "react";
import "./Header.scss";
import NavBarMessage from "./NavBarMessage";
import NavBarAlert from "./NavBarAlert";
import SearchBar from "./SearchBar";
import NavBarAuth from "./NavBarAuth";
class NavBar extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <NavBarMessage />
        <NavBarAlert />
        <SearchBar />
        <NavBarAuth />
      </ul>
    );
  }
}

export default NavBar;
