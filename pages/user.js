import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import UserList from "../src/containers/UserList";

class Home extends Component {
	render() {
		return (
			<MainLayout>
				<UserList />
			</MainLayout>
		);
	}
}

export default Home;