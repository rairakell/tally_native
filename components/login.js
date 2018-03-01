import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Auth} from '../service';
import {SetLocalToken} from '../service';

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	login() {
		Auth(this.state.email, this.state.password, (data) => {
			console.log("........ logined ........");
			SetLocalToken(data, () => {}, () => {});
			this.props.dispatch({
				type: "fetched", 
				data: data
			});
			console.log("Redirect to HomeScreen .......")
			this.props.navigation.navigate('Home');
		}, () => {
			console.log("........ failed .........");
		})
	};

	onUserChange(text) {
		this.state.email = text;
	};

	onPwdChange(text) {
		this.state.password = text;
	};

	render() {
		return (
			<View style={styles.container}>
	        	<TextInput 
		        	placeholder="请输入账号/电子邮箱/电话号码"
		        	style={styles.input}
		        	onChangeText={(text) => {this.onUserChange(text)}} />

	        	<TextInput 
		        	placeholder="请输入密码"
		        	secureTextEntry={true}
		        	style={styles.input}
		        	onChangeText={(text) => {this.onPwdChange(text)}} />

	        	<Button
		        	title="登录"
  					color="#f4511e"
  					onPress={() => {this.login()}}
  					style={styles.button} />
		    </View>
		)
	};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
  	margin: 5,
  },

  button: {
  	margin: 5,
  },
});
