import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Home extends React.Component {
	onLogin() {
		this.props.navigation.navigate('Login');
	};

	renderDayItems() {
		return this.props.data.dayItems.map((item) => {
            return (
                <View style={[styles.yearItems, styles.padding]} key={item.id}>
                	<View style={styles.dayItem}>
                		<Text>{item.category}</Text>
                	</View>
                	<View style={styles.dayItem}>
                		<Text>{item.amount}</Text>
                	</View>
                	<View style={styles.dayItem}>
                		<Text>{item.account}</Text>
                	</View>
                </View>
            );
        })
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.inputContainer, styles.margin]}>
					<TextInput style={styles.input} placeholder="请输入分类和金额,如: zc,12" />
				</View>
				<View style={[styles.year, styles.margin]}>
					<View style={[styles.yearItems, styles.padding]}>
						<View style={[styles.yearItem]}><Text>年出:{this.props.data.year.out}</Text></View>
						<View style={[styles.yearItem]}><Text>年入:{this.props.data.year.in}</Text></View>
						<View style={[styles.yearItem]}><Text>余:{this.props.data.year.in-this.props.data.year.out}</Text></View>
					</View>
			        
			        <View style={[styles.yearItems, styles.padding]}>
			        	<View style={[styles.yearItem]}><Text>月出:{this.props.data.month.out}</Text></View>
			        	<View style={[styles.yearItem]}><Text>月入:{this.props.data.month.in}</Text></View>
						<View style={[styles.yearItem]}><Text>余:{this.props.data.month.in-this.props.data.month.out}</Text></View>
			        </View>

			        <View style={[styles.yearItems, styles.padding]}>
			        	<View style={[styles.yearItem]}><Text>今出:{this.props.data.day.out}</Text></View>
			        	<View style={[styles.yearItem]}><Text>今入:{this.props.data.day.in}</Text></View>
						<View style={[styles.yearItem]}><Text>余:{this.props.data.day.in-this.props.data.day.out}</Text></View>
			        </View>
			    </View>
			    <View style={[styles.dayItemsHeader, styles.margin, styles.padding]}>
	                <View style={[styles.dayItemHeaderItem, styles.yearItems, styles.margin, styles.padding]}>
	                	<Text>今日开销</Text>
	                </View>
			    	<View style={[styles.dayItemHeaderItem, styles.yearItems,  styles.yearItems, styles.margin, styles.padding]}>
	                	<View style={[styles.yearItem]}>
	                		<Text>分类</Text>
	                	</View>
	                	<View style={[styles.yearItem]}>
	                		<Text>金额</Text>
	                	</View>
	                	<View style={[styles.yearItem]}>
	                		<Text>账户</Text>
	                	</View>
	                </View>
			    </View>
			    <View style={styles.details}>
			    	{this.renderDayItems()}
			    </View>
			    <View style={styles.chart}>
			    </View>
		    </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  year: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  yearItems: {
  	justifyContent: 'flex-start',
  	flexDirection: 'row',
  },

  yearItem: {
  	flex: 1,
  },

  details: {
  	backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  dayItemsHeader: {
  	alignItems: 'center',
  	backgroundColor: '#f4511e',
  },

  dayItem: {
  	flex: 1,
  },

  chart: {
  	flex: 10,
  },

  margin: {
  	marginTop: 5,
  	marginBottom: 5,
  },

  padding: {
  	paddingLeft: 5,
  	paddingRight: 5,
  },

  inputContainer: {
  	flexDirection: 'row',
  },

  input: {
  	flex: 1,
  	borderColor: '#f4511e',
  },
});
