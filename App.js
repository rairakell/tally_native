import React, { Component } from 'react';
import { HomeStack } from './routes';
import {Provider} from 'react-redux';
import store from './store';


export default class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<HomeStack />;
    	</Provider>
    ) 
  }
}