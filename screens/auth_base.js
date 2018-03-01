import React from 'react';
import {FetchLocalToken} from '../service';

class AuthBaseScreen extends React.Component {
	constructor(props) {
		super(props)

		const user = this.props.user

		if (user === undefined || Object.keys(user).length == 0) {
			FetchLocalToken(
				(data) => {

				},
				() => {
					
				}
			)
		}
		// if (user === undefined || Object.keys(user).length == 0) {
		// 	this.props.navigation.navigate('Login');
		// }
	}
}

export {AuthBaseScreen};