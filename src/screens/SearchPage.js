import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductComponent from '../Components/ProductComponent';
import SortModal from '../Modals/SortModal';
import FilterModal from '../Modals/FilterModel';
const jsonPicker = require('../jsonFiles/product.json')

export default class SearchPage extends Component {
  state = {
    sortModalDisplay: false,
    filterModalDisplay: false,
    arrayList: jsonPicker.itemList,
    valueInput: ''
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
  displayContent = () => {
    return this.state.arrayList.map((data) => {
      return (
        <ProductComponent
          productThumbnail={data.image}
          productTitle={data.title}
          productDiscription={data.description}
          price={data.price}
          iconCount={data.rating}
          rating={data.rating}
          category={data.category} />
      );
    });
  }
  lowToHighSort = () => {
    const priceValue = this.state.arrayList.sort((a, b) => {
      return a.price - b.price;
    })
    this.setState(() => {
      return {
        arrayList: priceValue,
        sortModalDisplay: false
      }
    });
  }
  highToLowSort = () => {
    const priceValue = this.state.arrayList.sort((a, b) => {
      return b.price - a.price;
    })
    this.setState(() => {
      return {
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
      }
    });
  }
  noFilter = () => {
    checkFun = (i) => {
      return i;
    }
    const filtered = jsonPicker.itemList.filter(checkFun);
    this.setState(() => {
      return {
        arrayList: filtered,
        filterModalDisplay: false
      }
    });
  }
  filterFemale = () => {
    checkFun = (i) => {
      const value = "Female";
      return i.category == value;
      
    }
    const filtered = jsonPicker.itemList.filter(checkFun);
    this.setState(() => {
      return {
        arrayList: filtered,
        filterModalDisplay: false
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
              noFilter={this.noFilter}
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