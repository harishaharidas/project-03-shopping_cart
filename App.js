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
<<<<<<< HEAD
import Home from './src/screens/Home'
export default class App extends Component {
  render() {
    return (
      // <SearchPage />
<Home/>
=======
import Cart from './src/screens/Cart';
import Home from './src/screens/Home';

export default class App extends Component {
  render() {
    return (
      // <Home/>
      <SearchPage />
      // <Cart />
>>>>>>> ad20fa8e6f866e31945f5d7c7394922ffafd2097
    );
  }
}
