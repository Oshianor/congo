import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import MediaLayout from "../src/containers/Media";

class Media extends Component {
	render() {
		return (
			<MainLayout>
				<MediaLayout />
			</MainLayout>
		);
	}
}

export default Media;