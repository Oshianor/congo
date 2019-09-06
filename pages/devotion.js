import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import Devotion from "../src/containers/Devotion/Devotion";

class Home extends Component {
	render() {
		return (
      <MainLayout>
        <Devotion />
      </MainLayout>
    );
	}
}

export default Home;