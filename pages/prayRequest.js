import React, { Component } from 'react';
import MainLayout from "../src/layouts/Main";
import PrayRequest from "../src/containers/PrayRequest/PrayRequest";

class Prayrequest extends Component {
	render() {
		return (
      <MainLayout>
        <PrayRequest />
      </MainLayout>
    );
	}
}

export default Prayrequest;