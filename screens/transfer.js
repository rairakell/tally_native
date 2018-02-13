import React from 'react';
import {
	Transfer
} from "../components";

var data = {
	accounts: [
		{
			id: 1,
			name: "刘耒的现金",		
		}, 
		{
			id: 2,
			name: "微信",
		},
		{
			id: 3,
			name: "工商银行卡",
		}
	]
}

export default class TransferScreen extends React.Component {
	static navigationOptions = {
	    title: '转账',
	};

	render() {
		return (
			<Transfer data={data} />
		)
	}
}