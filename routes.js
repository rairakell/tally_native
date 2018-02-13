import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import {HomeScreen, LoginScreen, TransferScreen} from './screens';

export const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  Transfer: {
    screen: TransferScreen,
  },
}, {
  initialRouteName: "Transfer",
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
      // marginTop: 25,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

// export const Tabs = TabNavigator({
//   Home: {
//     screen: HomeStack,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
//     },
//   },
//   Home2: {
//     screen: HomeStack,
//     navigationOptions: {
//       tabBarLabel: 'Home2',
//       tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
//     },
//   },
// });


// export const Root = StackNavigator({
//   Tabs: {
//     screen: Tabs,
//   },
// }, {
//   mode: 'modal',
//   headerMode: 'none',
// });