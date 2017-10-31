import React, { Component } from 'react';
import Status from "./Status";
import OverView from './OverView';
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Status />
        <OverView />
      </div>
    );
  }
}

export default Dashboard;
