import React, { Component } from "react";
// Import CSS
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/font-awesome/scss/font-awesome.scss";
import "../../vendor/datatables/dataTables.bootstrap4.css";
import "../../styles/sb-admin/sb-admin.scss";
import "../../styles/main.scss";

import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContainer />
      </div>
    );
  }
}
