
import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class FilterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onPressStatus:0,
      modalVisible: this.props.display
    };
  }
  setModalVisible = (visible) => {
    this.props.onPressingValue(visible)
  }

  onPressFilterSelectionMale = () => {
    this.setState({ onPressStatus: 1 }),
    this.props.male();
  }
  onPressFilterSelectionFemale = () => {
    this.setState({ onPressStatus: 2 }),
    this.props.female();
  }
  onPressFilterSelectionNoFilter = () => {
    this.setState({ onPressStatus: 3 }),
    this.props.noFilter();
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
            <Text style={[styles.text, { color: 'tomato' }]}>
              SORT BY GENDER
          </Text>
          </View>
          <TouchableOpacity style={styles.content} onPress={()=>this.onPressFilterSelectionMale()}>
            <Text
              style={this.state.onPressStatus==1 ? styles.textHighlight : styles.text}
            >
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content} onPress={()=>this.onPressFilterSelectionFemale()}>
            <Text style={this.state.onPressStatus==2 ? styles.textHighlight : styles.text}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content} onPress={()=>this.onPressFilterSelectionNoFilter()}>
            <Text style={this.state.onPressStatus==3 ? styles.text : styles.text}>Remove All</Text>
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
    justifyContent: 'center',
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
  },
  textHighlight: {
    paddingVertical: 14,
    fontSize: 16,
    color: 'red'
  }
})
