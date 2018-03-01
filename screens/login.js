import React from 'react';
import {connect} from 'react-redux';
import {UserToken} from '../actions';

import {
	Login
} from '../components'

class LoginScreen extends React.Component {
	static navigationOptions = {
	    title: '登录',
	};

	render() {
		return (
			<Login dispatch={this.props.dispatch} navigation={this.props.navigation} />
		)
	}
}

export default connect(
	null,
)(LoginScreen);