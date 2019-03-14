import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Star extends Component {
    starCount = (num) => {
        const tester = [];
        for (let i = 0; i < num; i++) {
          tester.push(
            <Icon name='star' style={{ color: '#FFD700' }} />
          );
        }
        return tester;
      }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
               {this.starCount(this.props.count)}
            </View>
         
        );
    }
}