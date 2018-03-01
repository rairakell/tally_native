import React from 'react';
import {View, Button} from 'react-native';
import {connect} from 'react-redux';
import {FetchOverview, UserToken} from '../actions';
import {FetchLocalToken, Overview} from '../service';
import { Home } from '../components';
// import {AuthBaseScreen} from './auth_base';

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);

		const user = this.props.user

		if (user === undefined || Object.keys(user).length == 0) {
			FetchLocalToken(
				(data) => {
					this.props.dispatch({
						type: "fetched", 
						data: data
					});
				},
				() => {
					console.log('Redirect to login......')
					this.props.navigation.navigate('Login');
				}
			)
		}
		// if (user === undefined || Object.keys(user).length == 0) {
		// 	this.props.navigation.navigate('Login');
		// }
	};

	componentWillMount() {
		const user = this.props.user;

		console.log("user: ", user)

		this.props.dispatch({
			type: "init",
			overview: {
				year: {
					out: 0,
					in: 0,
				},
				month: {
					out: 0,
					in: 0,
				},
				day: {
					out: 0,
					in: 0,
				},
				dayItems: []
			}
		})

		Overview(user.email, user.token, (data) => {
			this.props.dispatch(data)
		}, () => {

		})

	};

	// fetchOverview(dispatch: Function) {
	// 	dispatch(FetchOverview());
	// }

	static navigationOptions = {
	    title: '记账本',
	};

	render() {
		return (
			<Home data={this.props.data} />
		)
	};
}

const mapStateToProps = (state: Object) => {
	return {
		data: state.overview,
		user: state.user,
	}
}

// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//   	fetchOverview: () => dispatch(FetchOverview())
//   };
// }

// const mapDispatchToProps = {
//   	fetchOverview: FetchOverview,
//   	userToken: () => {
//   		return {
//   			onUserToken: (data) => {
//   				dispatch(data);
//   			}
//   		}
//   	}		
// }

export default connect(
	mapStateToProps,
	// mapDispatchToProps,
)(HomeScreen);