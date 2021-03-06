import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from '../Components/StarRating'

export default class DetailedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ' ADD TO CART FOR $ ',
        }
    }
    onPressAddToCart = () => {
        this.setState({
            content: ' ADDED TO CART FOR $ '
        });
    }
    render() {
        const { navigation } = this.props;
        const productTitle = navigation.getParam('productTitle', 'Invalid');
        const productImage = navigation.getParam('productThumbnail', 'Invalid');
        const productDiscription = navigation.getParam('productDiscription', 'Invalid');
        const price = navigation.getParam('price', 'Invalid');
        const star = navigation.getParam('star', 'Invalid');
        const category = navigation.getParam('category', 'Invalid');
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#F53D3F' />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                        <Icon name='arrow-left' style={{ fontSize: 28, paddingRight: 2 }} />
                    </TouchableOpacity>
                    <Text style={styles.headerProductTitle}>
                        {productTitle}
                    </Text>
                </View>
                <View style={styles.main}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={styles.itemDetails}>
                            <View style={styles.imageStyle}>
                                <Image source={{ uri: (productImage) }} resizeMode='stretch' style={styles.productImage} />
                            </View>
                            <View style={styles.itemHeader}>
                                <Text style={styles.discriptionHeading}> {productTitle}</Text>
                                <View><Text style={styles.itemSubHeader}>{category}</Text></View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.itemSubHeader}>
                                        {star}{" / 5"}
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.productDiscriptionText}>
                                {productDiscription}
                            </Text>
                        </View>
                        <View style={styles.specification}>
                            <View style={styles.commonHeader}>
                                <Text style={styles.commonHeading}>Specifications</Text>
                            </View>
                            <View style={styles.specificationDetails}>
                                <Text style={styles.textStyle1}> Artists   </Text>
                                <Text style={styles.textStyle2}> Justine Bieber, Rihinna   </Text>
                            </View>
                            <View style={styles.specificationDetails}>
                                <Text style={styles.textStyle1}> Duration   </Text>
                                <Text style={styles.textStyle2}> 2 Hours   </Text>
                            </View>
                        </View>
                        <View style={styles.specification}>
                            <View style={styles.commonHeader}>
                                <Text style={styles.commonHeading}>Product Reviews</Text>
                            </View>
                            <View style={styles.specificationDetails}>
                                <View style={styles.textStyle1}>
                                    <Text style={styles.reviewTextStyle1}> Cobus Bester   </Text>
                                    <StarRating
                                        iconCount="4"
                                    />
                                </View>
                                <View style={styles.textStyle2}>
                                    <Text style={styles.reviewTextStyle2}>  It is a long established fact that a
                                reader will be distracted.  </Text>
                                </View>
                            </View>
                            <View style={styles.specificationDetails}>
                                <View style={styles.textStyle1}>
                                    <Text style={styles.reviewTextStyle1}> Maria   </Text>
                                    <StarRating
                                        iconCount="5"
                                    />
                                </View>
                                <View style={styles.textStyle2}>
                                    <Text style={styles.reviewTextStyle2}> The point of using Lorem Ipsum is
                                 that it has a more-or-less.   </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.iconStyle} onPress={() => this.props.navigation.navigate('Cart')}>
                    <Icon name='cart' style={{ color: 'white', fontSize: 28 }} />
                </TouchableOpacity>
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => this.onPressAddToCart()}
                        style={styles.addCart}>
                        <Icon name='basket' style={styles.addCartIcon} />
                        <Text style={styles.addCartText}>{this.state.content}{price}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#F5F5F5",
        padding: 10,
        paddingVertical: 20,
        borderColor: '#F0F0F0',
        borderBottomWidth: 1,
    },
    iconStyle: {
        position: 'absolute',
        backgroundColor: '#F75151',
        borderRadius: 45,
        width: 60,
        height: 60,
        right: 10,
        top: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerProductTitle: {
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 40,
        color: 'black'
    },
    productImage: {
        width: 360,
        height: 300,
        resizeMode: 'stretch'
    },
    discriptionHeading: {
        fontSize: 20,
        fontWeight: "500",
        width:220,
        color: 'black',
        paddingRight: 20,
        paddingTop:10
    },
    main: {
        flex: 20,
        width: "100%",
        padding: 12,
        justifyContent: 'center',
    },
    imageStyle: {
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopEndRadius: 4,
        borderTopStartRadius: 4
    },
    productDiscriptionText: {
        color: 'black',
        fontSize: 14,
        textAlign: 'justify',
        padding: 12
    },
    itemHeader: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        paddingTop: 24,
    },
    itemSubHeader: {
        fontSize: 14,
        height: 44,
        fontWeight: "400",
        color: '#E85151',
        borderColor: '#F0F0F0',
        backgroundColor: '#F0F0F0',
        borderRadius: 45,
        padding: 12,
        marginRight: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    commonHeader: {
        backgroundColor: '#F0F0F0',
        borderBottomColor: "#DCDCDC",
        borderBottomWidth: 1
    },
    commonHeading: {
        fontSize: 14,
        fontWeight: "400",
        color: 'black',
        padding: 12
    },
    specification: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#F0F0F0',
        backgroundColor: 'white',
        marginTop: 12,
        paddingBottom: 16,
    },
    specificationDetails: {
        flex: 1,
        flexDirection: 'row',
        padding: 12,
        paddingRight: 20
    },
    addCart: {
        borderColor: '#E85151',
        borderWidth: 2,
        padding: 16,
        borderRadius: 4,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    addCartIcon: {
        color: '#E85151',
        fontSize: 28,
        paddingRight: 2
    },
    addCartText: {
        color: "#E85151",
        fontSize: 20,
        fontWeight: '500',
    },
    textStyle1: {
        fontSize: 14,
        fontWeight: "400",
        color: 'black',
        padding: 12,
        flex: 4,
    },
    textStyle2: {
        fontSize: 14,
        fontWeight: "400",
        color: 'black',
        padding: 12,
        flex: 8,
    },
    reviewTextStyle1: {

        color: 'black',
        fontWeight: '500'
    },
    reviewTextStyle2: {
        fontSize: 14,
        fontWeight: "400",
        color: 'black',
    },
    contentContainer: {
        backgroundColor: 'white'
    },
    footer: {
        flex: 2,
        width: "100%",
        backgroundColor: "#F5F5F5",
        borderColor: '#F0F0F0',
        borderTopWidth: 1,
        padding: 8,
        paddingVertical: 20,
        justifyContent: 'center',
    },
    itemDetails: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#F0F0F0',
        backgroundColor: 'white',
    },
});