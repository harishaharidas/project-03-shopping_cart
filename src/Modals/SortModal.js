
import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class SortModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ononPressStatus: 0,
      modalVisible: this.props.display,
    };
  }
  setModalVisible = (visible) => {
    this.props.onPressingValue(visible)
  }

  onPressFilterSelectionLowToHigh = () => {
    this.setState({ onPressStatus: 1 }),
    this.props.lowToHigh();
  }
  onPressFilterSelectionHighToLow = () => {
    this.setState({ onPressStatus: 2 }),
    this.props.highToLow();
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
          <Text style={[styles.text,{color:'tomato'}]}>SORT BY PRICE</Text>
          </View>
          <TouchableOpacity style={styles.content}  onPress={()=>this.onPressFilterSelectionLowToHigh()}>
            <Text style={this.state.onPressStatus==1 ? styles.textHighlight : styles.text} >Low to High</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content}  onPress={()=>this.onPressFilterSelectionHighToLow()}>
            <Text style={!this.state.onPressStatus==2 ? styles.textHighlight : styles.text}>High to Low</Text>
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
  },
  textHighlight: {
    paddingVertical: 14,
    fontSize: 16,
    color: 'red'
  }
})
