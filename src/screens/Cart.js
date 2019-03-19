import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SearchPage extends Component {
  state = {
    totalClick: false,
    checkClick: false
  };

  setTotalClick = () => {
    this.setState({
      totalClick: true,
      checkClick: false
    })
  }

  setCheckClick = () => {
    this.setState({
      checkClick: true,
      totalClick: false,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#F53D3F' />
        <View style={styles.header}>
          <Text style={{ fontSize: 24, color: '#696969', fontWeight: '500', flex: 16 }}>Your Cart</Text>
          <Icon name='close-circle' style={{ fontSize: 24, color: '#F53D3F', flex: 2 }} />
        </View>

        <View style={styles.title}>
          <Text style={{ fontSize: 20, color: '#F8F8F8', fontWeight: '400' }}>Your Cart Description</Text>
        </View>

        <View style={styles.main}>
          <View style={styles.cartItem}>
            <View style={styles.ItemDetails}>
              <View style={{ flex: 16 ,  paddingTop:20,paddingBottom:20,}}>
                <Text style={{ color: 'black', fontSize: 16 }}>Item Name
              </Text>
                <Text style={{ color: 'black', fontSize: 14 }}>Description
              </Text>
                <Text style={{ color: 'black', fontSize: 14 }}> $
              </Text>
              </View>
              <View style={{ flex:4 , padding: 8,height:'100%', backgroundColor: 'red' }}>
              </View>
            </View>
            <View style={styles.ItemOptions}>
              <View style={{ flexDirection: 'row', flex: 12, alignItems: 'stretch', justifyContent: 'flex-start', }}>
                <Icon name='minus-circle' style={{ fontSize: 24, color: '#F53D3F', paddingRight: 40 }} />
                <Text style={{ color: 'black', fontSize: 16, paddingRight: 40 }}>No</Text>
                <Icon name='plus-circle' style={{ fontSize: 24, color: '#F53D3F', paddingRight: 40 }} />
              </View>
              <TouchableOpacity style={{ flex: 4, }}>
                <Text style={styles.removeButton}>REMOVE</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>

        <View style={styles.footer}>
          < TouchableOpacity style={{ flex: 1, padding: 10, alignItems: 'center', }} onPress={this.setTotalClick}>
            <Text style={this.state.totalClick === true ? styles.onPressText : styles.footerText}>TOTAL $</Text>
          </ TouchableOpacity >
          <TouchableOpacity style={{ flex: 1, padding: 10, alignItems: 'center', }} onPress={this.setCheckClick}>
            <Text style={this.state.checkClick === true ? styles.onPressText : styles.footerText} >CHECKOUT</Text>
          </ TouchableOpacity >
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',

  },
  header: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    paddingLeft: 12,
    alignItems: 'center',
  },
  title: {
    flex: 2,
    backgroundColor: '#F53D3F',
    paddingLeft: 12,
    justifyContent: 'center',

  },
  main: {
    flex: 16,
    backgroundColor: 'white',
  },
  cartItem: {
    borderColor: '#F4F4F4',
    borderWidth: 1,
    backgroundColor: '#F4F4F4',
    width: '94%',
    // height: 60,
    margin: 12,
  },
  ItemDetails: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  ItemOptions: {
    backgroundColor: 'white',
    padding: 8,
    paddingLeft:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButton: {
    color: '#F53D3F',
    fontSize: 16,
    fontWeight: '400',
    borderColor: '#F53D3F',
    borderWidth: 1,
    padding: 8,
    borderRadius:4
  },
  footer: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',

  },
  footerText: {
    color: '#F53D3F',
    fontSize: 16,
    fontWeight: '400',
   
  },
  onPressText: {
    color: '#F53D3F',
    fontSize: 16,
    fontWeight: '400',
    borderColor: '#F53D3F',
    borderWidth: 1,
    padding: 12,
    paddingLeft: 48,
    paddingRight: 48,
    borderRadius:4
  }

});
