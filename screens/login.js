import React from 'react';

import {
	Login
} from '../components'

export default class LoginScreen extends React.Component {
	static navigationOptions = {
	    title: '登录',
	};

	render() {
		return (
			<Login />
		)
	}
}
