import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class StarRating extends Component {
  iconFunction = (num) => {
    const tester = [];
    for (let i = 0; i < num; i++) {
      tester.push(
        <Icon name='star' style={styles.iconStyle} />
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
const styles = StyleSheet.create({
  iconStyle: {
    color: '#D3AA34',
    paddingTop: 2,
    fontSize: 14,
    paddingLeft: 2
  }
})