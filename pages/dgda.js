import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import DGDA from "../src/containers/DGDA/DGDA";

class Home extends Component {
	render() {
		return (
			<MainLayout>
				<DGDA />
			</MainLayout>
		);
	}
}

export default Home;