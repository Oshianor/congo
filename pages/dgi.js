import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import DGI from "../src/containers/DGI/DGI";

class Home extends Component {
	render() {
		return (
			<MainLayout>
				<DGI />
			</MainLayout>
		);
	}
}

export default Home;