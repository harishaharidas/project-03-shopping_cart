import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductComponent from '../Components/ProductComponent';
import SortModal from '../Modals/SortModal';
import FilterModal from '../Modals/FilterModel';
const abc = require('../jsonFiles/product.json')

export default class SearchPage extends Component {
  state = {
    display: false,
    disp: false,
    abcd: abc.itemList,
    
    // priceValue: []
  }

  triggerModal() {
    this.setState(prevState => {
      return {
        display: true,
      }
    });
  }
  triggerModal2() {
    this.setState(prevState => {
      return {
        disp: true
      }
    });
  }

  aFunction = () => {
    return this.state.abcd.map((data) => {
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

    var priceValue = this.state.abcd.sort((a, b) => {
      return a.price - b.price;
    })
    this.setState(prevState => {
      return {
        abcd: priceValue,
        display:false
      }
    });
  }

  highToLowSort = () => {
    var priceValue = this.state.abcd.sort((a, b) => {
      return b.price - a.price;
    })
    this.setState(prevState => {
      return {
        abcd: priceValue,
        display:false
      }
    });
  }

  filterMale =()=> {
    checkFun=(i) => {
      var value="Male";
       return i.category==value;
    }
    var filtered = this.state.abcd.filter(checkFun);
    this.setState(prevState => {
      return {
        abcd: filtered,
        disp:false
      }
    });
  }
  filterFemale =()=> {
    checkFun=(i) => {
      var value="Female";
       return i.category==value;
    }
    var filtered = this.state.abcd.filter(checkFun);
    this.setState(prevState => {
      return {
        abcd: filtered,
        disp:false
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
              <TouchableOpacity><Icon name='arrow-left' style={styles.goBack} /></TouchableOpacity>
              <View style={styles.search}>
                <TextInput
                  onChangeText={(term) => { this.searchUpdated(term) }}
                  placeholder='Search a product'
                  style={styles.headerInputsection} />
                <Icon name='magnify' style={styles.searchIcon} />
              </View>
            </View>
          </View>
          <View style={styles.contentAlter}>
            <TouchableOpacity style={styles.sort} onPress={() => this.triggerModal()}>
              <Icon name='sort' style={styles.sortIcon} />
              <Text style={{ color: 'red' }}>Sort</Text>
            </TouchableOpacity>
            <SortModal
              display={this.state.display}
              onPressingValue={(value) => this.setState({ display: value })}
              lowToHigh={this.lowToHighSort}
              highToLow={this.highToLowSort}

            />
            <TouchableOpacity style={styles.filter} onPress={() => this.triggerModal2()} >
              <Icon name='filter-outline' style={styles.filterIcon} />
              <Text style={{ color: 'red' }}>Filter</Text>
            </TouchableOpacity>
            <FilterModal
              display={this.state.disp}
              onPressingValue={(value) => this.setState({ disp: value })}
              male={this.filterMale}
              female={this.filterFemale}
            />
          </View>
        </View>
        <ScrollView style={styles.contentsection}>
          {this.aFunction()}
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
