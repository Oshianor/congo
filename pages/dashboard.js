import React, { Component } from "react";
import MainLayout from "../src/layouts/Main";
import DashboardLayout from "../src/containers/Dashboard";

class Media extends Component {
  render() {
    return (
      <MainLayout>
        <DashboardLayout />
      </MainLayout>
    );
  }
}

export default Media;
