import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import Sermons from "../src/containers/Sermons/Sermons";

class Home extends Component {
	render() {
		return (
			<MainLayout>
				<Sermons />
			</MainLayout>
		);
	}
}

export default Home;