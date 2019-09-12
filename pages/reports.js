import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import Reports from "../src/containers/Reports/Reports";

class Home extends Component {
	render() {
		return (
      <MainLayout>
        <Reports />
      </MainLayout>
    );
	}
}

export default Home;