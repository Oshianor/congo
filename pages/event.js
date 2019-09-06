import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import Event from "../src/containers/Event/Event";

class Home extends Component {
	render() {
		return (
			<MainLayout>
				<Event />
			</MainLayout>
		);
	}
}

export default Home;