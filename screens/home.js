import React from 'react';

import { Home } from '../components'

var data = {
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
		{
			id: 3,
			category: "服饰",
			amount: 1250,
			account: "刘耒的钱包"
		}
	]
}

export default class HomeScreen extends React.Component {
	static navigationOptions = {
	    title: '记账本',
	};

	render() {
		return (
			<Home navigation={this.props.navigation} data={data} />
		)
	}
}
