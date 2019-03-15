
import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.text}>SORT BY PRICE</Text>
          </View>
          <TouchableOpacity style={styles.content} onPress={this.props.lowToHigh}>
            <Text style={styles.text} >Low to High</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content} onPress={this.props.highToLow}>
            <Text style={styles.text}>High to Low</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    bottom: 48,
    height: 150,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    marginTop: 20,
    marginLeft: 90,
    height: 200,
    width: 200,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    paddingVertical: 14,
    fontSize: 16
  }
})
