import React from 'react';
import {View, Button} from 'react-native';
import {connect} from 'react-redux';
import {FetchOverview, UserToken} from '../actions';
import {FetchLocalToken} from '../service';
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
		this.props.dispatch({
			type: "init",
			overview: {
				year: {
					out: 12000,
					in: 13500,
				},
				month: {
					out: 1200,
					in: 1350,
				},
				day: {
					out: 568,
					in: 0,
				},
				dayItems: [
					{
						id: 1,
						category: "饮食",
						amount: 12.5,
						account: "刘耒的钱包"
					},
					{
						id: 2,
						category: "服饰",
						amount: 125,
						account: "刘耒的钱包"
					},
				]
			}
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