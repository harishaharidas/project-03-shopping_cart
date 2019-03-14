import React, { Component } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class StarRating extends Component {
  iconFunction = (num) => {
    const tester = [];
    for (let i = 0; i < num; i++) {
      tester.push(
        <Icon name='star' style={{color:'#D3AA34', paddingTop:2, fontSize:14,paddingLeft:2}} />
      );
    }
    return tester;
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {this.iconFunction(this.props.iconCount)}
      </View>
    );
  }
}
