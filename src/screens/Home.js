import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import backgroundImage from '../images/backgroundImage.jpg'


export default class Home extends Component {
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
                    <View style={styles.contentItems}>
                        <View style={{ flex: 2, padding: 20 }}></View>
                        <View style={{ flex: 12, borderColor: 'white', borderBottomColor: 'grey', borderBottomWidth: .5, flexDirection: 'row' }}>
                            <View style={{ flex: 8 }}>
                                <Text style={{color:'back',fontSize: 16, fontWeight: '700' }}>Item Name</Text>
                                <Text style={{fontSize: 14,fontWeight: '200' }}>Lorem Ipsum is simply dummy text of the printing and
             typesetting...</Text>
                                <Text style={{fontSize: 14,fontWeight: '200' }}>$ Amount</Text>


                            </View>
                            < TouchableOpacity style={{ flex: 2,alignItems:'center',justifyContent:'center' }}>
                                <Icon name='arrow-right' style={{ color: 'blue', fontSize: 20, paddingLeft: 16 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                   
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
