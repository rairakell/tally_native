import React from "react";
import {
	Text, 
	TextInput,
	Button,
	View,
	Picker,
} from "react-native";

export default class Tranfer extends React.Component {
	setFromAccount(v, i) {

	};

	setToAccount(v, i) {

	};

	transfer() {

	};

	renderAccounts() {
		return this.props.data.accounts.map((account) => {
	  		return (
	  			<Picker.Item
	  				key={account.id}
	  				label={account.name}
	  				value={account.id} />
	  		)
	  	})
	}

	render() {
		return(
			<View>
				<View>
					<Text>转出账户</Text>
					<Picker
					  onValueChange={(itemValue, itemIndex) => this.setFromAccount(itemValue)}>
					  {this.renderAccounts()}
					</Picker>
				</View>
				<View>
					<Text>转入账户</Text>
					<Picker
					  onValueChange={(itemValue, itemIndex) => this.setToAccount(itemValue)}>
					  {this.renderAccounts()}
					</Picker>
				</View>
				<View>
					<Text>金额</Text>
					<TextInput />
				</View>
				<Button
					title="转账"
					onPress={() => this.transfer() } />
			</View>
		)
	}
}