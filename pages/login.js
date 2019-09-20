import React, { Component } from 'react';
import Login from "../src/containers/Login/login";
import Otp from "../src/containers/Login/otp";
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  account: state.account
});

class LoginContainer extends Component {
	render() {
  const { account } = this.props;
    
		return (
			<div>
        {account.route === 'login' ? ( <Login />
        ) : (
          <Otp />
        )}
			</div>
		);
	}
}

export default connect(
  mapStateToProps
)(LoginContainer);