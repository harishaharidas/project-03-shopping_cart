/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import SearchPage from './src/screens/SearchPage';
import Cart from './src/screens/Cart';
import Home from './src/screens/Home';

export default class App extends Component {
  render() {
    return (
      // <Home/>
      <SearchPage />
      // <Cart />
    );
  }
}
