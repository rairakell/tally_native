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
  initialRouteName: "Home",
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