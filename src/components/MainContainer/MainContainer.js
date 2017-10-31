import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import WellbeingPulse from "../WellbeingPulse/WellbeingPulse";
import "./MainContainer.scss";
class MainContainer extends Component {
  render() {
    return (
      <div className="main-container content-wrapper">
        <div className="container-fluid">
          <WellbeingPulse />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default MainContainer;
