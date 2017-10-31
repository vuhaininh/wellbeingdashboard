import React, { Component } from "react";
import "./Header.scss";

class SideNav extends Component {
  render() {
    return (
      <div>
        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title="Dashboard"
          >
            <a className="nav-link" href="index.html">
              <i className="fa fa-fw fa-dashboard" />
              <span className="nav-link-text">Dashboard</span>
            </a>
          </li>
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title="Charts"
          >
            <a className="nav-link" href="index.html">
              <i className="fa fa-fw fa-area-chart" />
              <span className="nav-link-text">Wellbing Pulse</span>
            </a>
          </li>
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title="Tables"
          >
            <a className="nav-link" href="index.html">
              <i className="fa fa-fw fa-table" />
              <span className="nav-link-text">Mightifier</span>
            </a>
          </li>


        </ul>
        <ul className="navbar-nav sidenav-toggler">
          <li className="nav-item">
            <a className="nav-link text-center" id="sidenavToggler">
              <i className="fa fa-fw fa-angle-left" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default SideNav;
