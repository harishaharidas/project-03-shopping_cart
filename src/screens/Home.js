import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import backgroundImage from '../images/backgroundImage.jpg';
import ProductComponent from '../Components/ProductComponent';
const Product = require('../jsonFiles/product.json');

export default class Home extends Component {
    listProducts = () => {
        return Product.itemList.map((data) => {
            return (
                <ProductComponent
                    productThumbnail={data.image}
                    productTitle={data.title}
                    productDiscription={data.description}
                    price={data.price}
                    iconCount='0'
                    rating={data.rating}
                    category={data.category} />
            );
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#F53D3F' />
                <View style={styles.Header}>
                    < TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name='menu' style={styles.menuIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 8, }}>
                        <Text style={styles.headerText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 2, }} onPress={() => this.props.navigation.navigate('Cart')}>
                        <Icon name='cart' style={styles.cartIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.HeaderImage}>
                    <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }} ></ImageBackground>
                </View>
                <ScrollView style={styles.Content}>
                    {this.listProducts()}
                </ScrollView>
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
        height: 60,
        flexDirection: "row",
        backgroundColor: '#F53D3F',
        width: "100%",
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuIcon: {
        color: 'white',
        fontSize: 24,
        paddingLeft: 16
    },
    HeaderImage: {
        height: 170,
        width: "100%"
    },
    headerText: {
        color: 'white',
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 28
    },
    cartIcon: {
        color: 'white',
        fontSize: 24,
        paddingRight: 2
    },
    Content: {
        flex: 12,
        width: "100%",
    },
    contentItems: {
        height: 100,
        paddingLeft: 0,
        flexDirection: "row",
    }
});
