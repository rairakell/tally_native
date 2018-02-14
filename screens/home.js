import React from 'react';
import {connect} from 'react-redux';
import {FetchOverview} from '../actions';
import { Home } from '../components'

export default class HomeScreen extends React.Component {
	static navigationOptions = {
	    title: '记账本',
	}

	// constructor(props) {
	// 	super(props);

	// 	// const {data, FetchOverview} = props;

	// 	// if (FetchOverview != undefined) {
	// 	// 	// FetchOverview();
	// 	// }
	// }

	render() {
		return (
			<Home navigation={this.props.navigation} data={this.data} />
		)
	}
}

// const mapStateToProps = (state: Object) => {
//   return {
//     data: state.overview,
//   }
// }

// const mapDispatchToState = (dispatch: Function) => {
//   return {FetchOverview: () => dispatch(FetchOverview())}
// }

// connect(
// 	mapStateToProps,
// 	mapDispatchToState,
// )(HomeScreen);