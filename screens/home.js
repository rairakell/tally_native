import React from 'react';
import {View, Button} from 'react-native';
import {connect} from 'react-redux';
import {FetchOverview} from '../actions';
import { Home } from '../components'

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props)

		// if (this.props.FetchOverview !== undefined) {
			// this.props.fetchOverview();
		// }
		// {FetchOverview} = props;

		// if (FetchOverview !== undefined) {
		// 	FetchOverview()
		// }
	}

	componentWillMount() {
		this.props.fetchOverview();
	}

	// fetchOverview(dispatch: Function) {
	// 	dispatch(FetchOverview());
	// }

	static navigationOptions = {
	    title: '记账本',
	}

	render() {
		console.log("rendering..................", this.props.data)
		return (
			<Home navigation={this.props.navigation} data={this.props.data} />
		)
	}
}

const mapStateToProps = (state: Object) => {
	console.log("state:", state)

	return {
		data: state.overview,
	}
}

// const mapDispatchToProps = (dispatch: Function) => {
//   return {
//   	fetchOverview: () => dispatch(FetchOverview())
//   };
// }

const mapDispatchToProps = {
  	fetchOverview: FetchOverview,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(HomeScreen);