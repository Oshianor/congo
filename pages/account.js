import React, { Component } from "react";
import MainLayout from "../src/layouts/Main";
import Account from "../src/containers/Account/Account";

class Home extends Component {
  render() {
    return (
      <MainLayout>
        <Account />
      </MainLayout>
    );
  }
}

export default Home;
