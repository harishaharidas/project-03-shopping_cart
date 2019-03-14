import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from '../Components/StarRating';
import dummyImage from '../images/dummy.png'

export default class ProductComponent extends Component {
  render() {
    return (
      <View style={{ height: 110, flexDirection: 'row' }}>
        <View>
          <Image
            source={{ uri: this.props.productThumbnail}}
            style={styles.image} />
        </View>
        <View style={styles.productDetails}>
          <View style={{ alignItems: 'flex-start', width: 220 }}>
            <Text style={styles.productTitleText}>{this.props.productTitle}</Text>
            <Text>{this.props.productDiscription}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>{"$ "}{this.props.price}</Text>
              <StarRating
                iconCount={this.props.iconCount} />
            </View>
          </View>
          <TouchableOpacity style={{ justifyContent: 'center' }}>
            <Icon name='arrow-right' style={styles.goTo} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    margin: 24
  },
  productDetails: {
    flexDirection: 'row',
    borderBottomColor: '#DFDFDF',
    borderBottomWidth: 1
  },
  productTitleText: {
    paddingTop: 20,
    fontSize: 16,
    color: 'black'
  },
  goTo: {
    paddingLeft: 36,
    paddingRight: 16,
    fontSize: 20
  },
});