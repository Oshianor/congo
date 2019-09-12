import React, { Component } from "react";
import MainLayout from "../src/layouts/Main";
import DGRAD from "../src/containers/DGRAD/DGRAD";

class Home extends Component {
  render() {
    return (
      <MainLayout>
        <DGRAD />
      </MainLayout>
    );
  }
}

export default Home;
