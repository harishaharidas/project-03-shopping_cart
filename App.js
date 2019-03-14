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
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';

export default class App extends Component {
  render() {
    return (
      // <SearchPage />
      // <Home />
      <Cart/>
    );
  }
}
