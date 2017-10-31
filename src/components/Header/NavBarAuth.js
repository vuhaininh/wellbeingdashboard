import React, { Component } from "react";
class NavBarAuth extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
          <i className="fa fa-fw fa-sign-out" />Logout
        </a>
      </li>
    );
  }
}
export default NavBarAuth;
