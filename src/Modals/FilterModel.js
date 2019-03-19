
import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class FilterModal extends Component {
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
        transparent={true} >
        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setModalVisible(false)} />
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.text}>
              SORT BY GENDER
          </Text>
          </View>
          <TouchableOpacity style={styles.content} onPress={this.props.male}>
            <Text style={styles.text}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content} onPress={this.props.female}>
            <Text style={styles.text}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content} onPress={this.props.noFilter}>
            <Text style={styles.text}>Remove All</Text>
          </TouchableOpacity>
        </View>
      </Modal >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    bottom: 48,
    height: 200,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginTop: 20,
    marginLeft: 90,
    height: 200,
    width: 200,
  },
  text: {
    paddingVertical: 14,
    fontSize: 16
  }
})
