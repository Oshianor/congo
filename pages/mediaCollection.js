import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import MediaLayout from "../src/containers/MediaCollection";

class MediaCollection extends Component {
	render() {
		return (
			<MainLayout>
				<MediaLayout />
			</MainLayout>
		);
	}
}

export default MediaCollection;