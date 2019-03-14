import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import backgroundImage from '../images/backgroundImage.jpg';
import ProductComponent from '../Components/ProductComponent'
const Product = require('../jsonFiles/product.json')

export default class Home extends Component {
   

    listProducts = () => {  
      return Product.itemList.map((data) => {
            return (
                <ProductComponent
                productThumbnail={data.image}
                productTitle={data.title}
                productDiscription={data.description}
                price={data.price}  
                    
                />
            );
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent />
                <View style={styles.Header}>
                    < TouchableOpacity style={{ flex: 2, }}>
                        <Icon name='menu' style={{ color: 'white', fontSize: 28, paddingLeft: 16 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 8, }}>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: "bold" }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 2, }}>
                        <Icon name='cart' style={{ color: 'white', fontSize: 28, paddingRight: 2 }} />
                    </TouchableOpacity>

                </View>
                <View style={styles.HeaderImage}>
                    <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }} ></ImageBackground>
                </View>
                <View style={styles.Content}>
                    {this.listProducts()}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Header: {
        flex: 2,
        flexDirection: "row",
        backgroundColor: '#F75151',
        width: "100%",
        paddingTop: 48
    },
    HeaderImage: {
        flex: 4,
        // backgroundColor: 'black',
        width: "100%"
    },
    Content: {
        flex: 12,
        width: "100%",
        padding: 10
    },
    contentItems: {
        height: 100,
        paddingLeft: 0,
        flexDirection: "row",
    }
});
