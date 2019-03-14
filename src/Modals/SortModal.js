
import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const Product = require('../jsonFiles/product.json')

export default class SortModal extends Component {
  state = {
    modalVisible: this.props.display,
  
  };
  setModalVisible = (visible) => {
    this.props.onPressingValue(visible)
  }
 
  render() {
    return (
      <Modal
        visible={this.props.display}
        animationType="fade"
        onRequestClose={() => this.setModalVisible(false)}
        transparent={true}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setModalVisible(false)} />
        <View style={{
          bottom: 0, height: 100, width: '100%',
          alignItems: 'center', backgroundColor: 'white',
        }}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={this.props.lowToHigh}>
            <Text style={{ paddingVertical: 14, fontSize: 16 }} onPress={() => this.sortList()}>SORT BY PRICE : Low to High</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ paddingVertical: 14, fontSize: 16 }}>SORT BY PRICE : High to Low</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginLeft: 90,
    height: 200,
    width: 200,
  },
  text: {
    fontSize: 20,
    marginLeft: 150,
    paddingTop: 300
  }
})
