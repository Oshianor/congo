import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import Support from "../src/containers/Support/support"

class Home extends Component {
	render() {
		return (
      <MainLayout>
        <Support />
      </MainLayout>
    );
	}
}

export default Home;