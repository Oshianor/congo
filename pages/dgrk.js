import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import DGRK from "../src/containers/DGRK/DGRK";

class MediaCollection extends Component {
	render() {
		return (
			<MainLayout>
				<DGRK />
			</MainLayout>
		);
	}
}

export default MediaCollection;