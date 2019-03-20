import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from '../Components/StarRating';

class ProductComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: this.props.productThumbnail }}
            style={styles.image} />
        </View>
        <TouchableOpacity
          style={styles.productDetails}
          onPress={() => this.props.navigation.navigate('DetailedPage', {
            productThumbnail: this.props.productThumbnail,
            productTitle: this.props.productTitle,
            productDiscription: this.props.productDiscription,
            price: this.props.price,
            star: this.props.rating,
            category:this.props.category
          })}>
          <View style={{ alignItems: 'flex-start', width: 220 }}>
            <Text style={styles.productTitleText}>{this.props.productTitle}</Text>
            <Text>{((this.props.productDiscription).length > 55) ?
              (((this.props.productDiscription).substring(0, 55 - 3)) + '...') :
              this.props.productDiscription}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>{"$ "}{this.props.price}</Text>
              <StarRating
                iconCount={this.props.iconCount} />
            </View>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Icon name='arrow-right' style={styles.goTo} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(ProductComponent);

const styles = StyleSheet.create({
  container: {
    height: 110,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
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