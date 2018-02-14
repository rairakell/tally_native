import React from 'react';
import {connect} from 'react-redux';
import {FetchOverview} from '../actions';
import { Home } from '../components'

export default class HomeScreen extends React.Component {
	constructor(props) {
		super(props);

		if (this.props.FetchOverview !== undefined) {
			this.props.FetchOverview();
		}
		// {FetchOverview} = props;

		// if (FetchOverview !== undefined) {
		// 	FetchOverview()
		// }
	}

	static navigationOptions = {
	    title: '记账本',
	}

	render() {
		return (
			<Home navigation={this.props.navigation} data={this.props.data} />
		)
	}
}

const mapStateToProps = (state: Object) => {
  return {
    data: state.overview,
  }
}

const mapDispatchToState = (dispatch: Function) => {
  return {FetchOverview: () => dispatch(FetchOverview())}
}

connect(
	mapStateToProps,
	mapDispatchToState,
)(HomeScreen);