import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styles from './homeCss'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};

    if (this.props.data === undefined) {
      this.state.data = {
        year: {
          in: 0,
          out: 0,
        },
        month: {
          in: 0,
          out: 0,
        },
        day: {
          in: 0,
          out: 0,
        },
        dayItems: [],
      }
    } else {
      this.state.data = this.props.data
    }
  }

	onLogin() {
		this.props.navigation.navigate('Login');
	};

	renderDayItems() {
		return this.state.data.dayItems.map((item) => {
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
						<View style={[styles.yearItem]}><Text>年出:{this.state.data.year.out}</Text></View>
						<View style={[styles.yearItem]}><Text>年入:{this.state.data.year.in}</Text></View>
						<View style={[styles.yearItem]}><Text>余:{this.state.data.year.in-this.state.data.year.out}</Text></View>
					</View>
			        
			        <View style={[styles.yearItems, styles.padding]}>
			        	<View style={[styles.yearItem]}><Text>月出:{this.state.data.month.out}</Text></View>
			        	<View style={[styles.yearItem]}><Text>月入:{this.state.data.month.in}</Text></View>
						<View style={[styles.yearItem]}><Text>余:{this.state.data.month.in-this.state.data.month.out}</Text></View>
			        </View>

			        <View style={[styles.yearItems, styles.padding]}>
			        	<View style={[styles.yearItem]}><Text>今出:{this.state.data.day.out}</Text></View>
			        	<View style={[styles.yearItem]}><Text>今入:{this.state.data.day.in}</Text></View>
						<View style={[styles.yearItem]}><Text>余:{this.state.data.day.in-this.state.data.day.out}</Text></View>
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