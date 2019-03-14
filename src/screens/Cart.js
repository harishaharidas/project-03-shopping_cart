import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import itemImage from '../images/cart1.jpg';
import StarRating from '../Components/StarRating'

export default class Cart extends Component {
    render() {
        return (

            <View style={styles.container}>
               <StatusBar backgroundColor='#F53D3F' />
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name='arrow-left' style={{ fontSize: 28, paddingRight: 2 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, fontWeight: "bold", paddingLeft: 40 }}>
                        Woo Single Awesome
                </Text>
                </View>
                <View style={styles.main}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={styles.itemDetails}>
                            <View style={styles.imageStyle}>
                                <Image source={itemImage} style={{ width: 260, height: 200, resizeMode: 'stretch' }} />
                            </View>

                            <View style={styles.itemHeader}>
                                <Text style={{ fontSize: 20, fontWeight: "500", color: 'black', paddingRight: 20 }}> Woo Single Awesome</Text>
                                <TouchableOpacity><Text style={styles.itemSubHeader}>Musics</Text></TouchableOpacity>
                                <TouchableOpacity><Text style={styles.itemSubHeader}>Singles</Text></TouchableOpacity>
                            </View>

                            <Text style={{ color: 'black', fontSize: 12, textAlign: 'justify', padding: 12 }}>
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                 that it has a more-or-less normal distribution of letters, as opposed to using
                                 'Content here, content here', making it look like readable English. Many desktop
                                 publishing packages and web page editors now use Lorem Ipsum as their default model text.
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
                <TouchableOpacity style={styles.iconStyle}>
                    <Icon name='cart' style={{ color: 'white', fontSize: 28 }} />
                </TouchableOpacity>
                <View style={styles.footer}>
                    <TouchableOpacity style={{ borderColor: '#E85151', borderWidth: 2, padding: 16, borderRadius: 4, justifyContent: 'center', flexDirection: 'row' }}>
                        <Icon name='basket' style={{ color: '#E85151', fontSize: 28, paddingRight: 2 }} />
                        <Text style={{ color: "#E85151", fontSize: 20, fontWeight: '500', }}>{' '}ADD TO CART FOR $ 2</Text>
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
        paddingTop: 24,
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
        top: 60,
        alignItems: 'center',
        justifyContent: 'center',
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
        paddingTop: 72,
        paddingBottom: 72,
        borderTopEndRadius: 4,
        borderTopStartRadius: 4
    },

    itemHeader: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        paddingTop: 24
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
        marginRight: 10

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
        paddingBottom: 20,
        paddingTop: 20,
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