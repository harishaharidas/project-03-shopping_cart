import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductComponent from '../Components/ProductComponent';
import SortModal from '../Modals/SortModal';
import FilterModal from '../Modals/FilterModel';
const jsonPicker = require('../jsonFiles/product.json')

export default class SearchPage extends Component {
  state = {
<<<<<<< HEAD
    sortModalDisplay: false,
    filterModalDisplay: false,
    arrayList: jsonPicker.itemList,
=======
    display: false,
    disp: false,
    abcd: abc.itemList,
<<<<<<< HEAD
    
    // priceValue: []
=======
>>>>>>> 22de0447f9937ab4bf9860c97b60e9bd5d306346
    valueInput: ''
>>>>>>> 07a2fd1594016831d103e8c2f069208e2937d059
  }
  displayTextInput = val => {
    this.setState({
      valueInput: val
    }, () => this.searchFilter());
    
}
triggerModalToSort() {
    this.setState( () => {
      return {
        sortModalDisplay: true,
      }
    });
  }
  triggerModalToFilter() {
    this.setState(() => {
      return {
        filterModalDisplay: true
      }
    });
  }
<<<<<<< HEAD

  aFunction = () => {
=======
  displayContent = () => {
<<<<<<< HEAD
    return this.state.arrayList.map((data) => {
=======
>>>>>>> 07a2fd1594016831d103e8c2f069208e2937d059
    return this.state.abcd.map((data) => {
>>>>>>> 22de0447f9937ab4bf9860c97b60e9bd5d306346
      return (
        <ProductComponent
          productThumbnail={data.image}
          productTitle={data.title}
          productDiscription={data.description}
          price={data.price}
          iconCount={data.rating} />
      );
    });
  }

  lowToHighSort = () => {
<<<<<<< HEAD
    const priceValue = this.state.arrayList.sort((a, b) => {
=======

    var priceValue = this.state.abcd.sort((a, b) => {
>>>>>>> 22de0447f9937ab4bf9860c97b60e9bd5d306346
      return a.price - b.price;
    })
    this.setState(prevState => {
      return {
<<<<<<< HEAD
        arrayList: priceValue,
        sortModalDisplay: false
=======
     
        abcd: priceValue

>>>>>>> 22de0447f9937ab4bf9860c97b60e9bd5d306346
      }
    });
  }

  highToLowSort = () => {
<<<<<<< HEAD
    const priceValue = this.state.arrayList.sort((a, b) => {
=======

    var priceValue = this.state.abcd.sort((a, b) => {
>>>>>>> 22de0447f9937ab4bf9860c97b60e9bd5d306346
      return b.price - a.price;
    })
    this.setState(prevState => {
      return {
<<<<<<< HEAD
        arrayList: priceValue,
        sortModalDisplay: false
      }
    });
  }
  filterMale = () => {
    checkFun = (i) => {
      const value = "Male";
      return i.category == value;
    }
    const filtered = jsonPicker.itemList.filter(checkFun);
    this.setState(() => {
      return {
        arrayList: filtered,
        filterModalDisplay: false
=======
      
        abcd: priceValue
>>>>>>> 22de0447f9937ab4bf9860c97b60e9bd5d306346
      }
    });
  }

  filterMale =()=> {
    checkFun=(i) => {
      var value="Male";
       return i.category==value;
    }
<<<<<<< HEAD
    const filtered = jsonPicker.itemList.filter(checkFun);
    this.setState(() => {
      return {
        arrayList: filtered,
        filterModalDisplay: false
=======
    var filtered = abc.itemList.filter(checkFun);
    this.setState(prevState => {
      return {
        abcd: filtered,
        disp:false
>>>>>>> 22de0447f9937ab4bf9860c97b60e9bd5d306346
      }
    });
  }
  filterFemale = () => {
    checkFun = (i) => {
      const value = "Female";
      return i.category == value;
      
    }
<<<<<<< HEAD
    const filtered = jsonPicker.itemList.filter(checkFun);
    this.setState(() => {
      return {
        arrayList: filtered,
        filterModalDisplay: false
=======
    var filtered = abc.itemList.filter(checkFun);
    this.setState(prevState => {
      return {
        abcd: filtered,
        disp:false
>>>>>>> 22de0447f9937ab4bf9860c97b60e9bd5d306346
      }
    });
  }
  searchFilter=()=>{
    checkFun = (i) => {
      const value = this.state.valueInput;
      var strRegExPattern = value; 
      return i.title.match(new RegExp(strRegExPattern,'i')) ||i.description.match(new RegExp(strRegExPattern,'i')) 
    }
    const filtered = jsonPicker.itemList.filter(checkFun);
    this.setState(() => {
      return {
        arrayList: filtered,
        filterModalDisplay: false,
        sortModalDisplay: false,
      }
    });
}
  render() {
    return (
      <View style={styles.container} >
        <StatusBar backgroundColor='#F53D3F' />
        <View style={{ height: 120 }}>
          <View style={styles.headerInputsection}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity><Icon name='arrow-left' style={styles.goBack}  onPress={() => this.props.navigation.goBack()}/></TouchableOpacity>
              <View style={styles.search}>
                <TextInput placeholder='Search a product' style={styles.headerInputsection} onChangeText={this.displayTextInput}/>
                <Icon name='magnify' style={styles.searchIcon}/>
              </View>
            </View>
          </View>
          <View style={styles.contentAlter}>
            <TouchableOpacity style={styles.sort} onPress={() => this.triggerModalToSort()}>
              <Icon name='sort' style={styles.sortIcon} />
              <Text style={{ color: 'red' }}>Sort</Text>
            </TouchableOpacity>
            <SortModal
              display={this.state.sortModalDisplay}
              onPressingValue={(value) => this.setState({ sortModalDisplay: value })}
              lowToHigh={this.lowToHighSort}
              highToLow={this.highToLowSort}
            />
            <TouchableOpacity style={styles.filter} onPress={() => this.triggerModalToFilter()} >
              <Icon name='filter-outline' style={styles.filterIcon} />
              <Text style={{ color: 'red' }}>Filter</Text>
            </TouchableOpacity>
            <FilterModal
              display={this.state.filterModalDisplay}
              onPressingValue={(value) => this.setState({ filterModalDisplay: value })}
              male={this.filterMale}
              female={this.filterFemale}
            />
          </View>
        </View>
        <ScrollView style={styles.contentsection}>
          {this.displayContent()}
        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  headerInputsection: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    alignItems: 'center'
  },
  goBack: {
    fontSize: 32,
    paddingLeft: 8,
    backgroundColor: 'transparent'
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350
  },
  searchInputText: {
    marginLeft: 8,
    backgroundColor: 'white',
    width: 300,
    height: 40
  },
  searchIcon: {
    fontSize: 24,
    paddingRight: 8,
    backgroundColor: 'transparent'
  },
  contentAlter: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row'
  },
  sort: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sortIcon: {
    padding: 8,
    fontSize: 24,
    color: 'red'
  },
  filter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterIcon: {
    padding: 8,
    fontSize: 24,
    color: 'red'
  },
  contentsection: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'stretch'
  },
});
