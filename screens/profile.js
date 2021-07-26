import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Profile extends Component {

    navigateToCompleted(){
        this.props.navigation.navigate('CompletedOrder');
    }

    async endSession() {
        try {
            await AsyncStorage.clear();
            console.log("Session Ended successfully");
        }
        catch (error) {
            console.log("Error in clearing value : "+error);
        }
    }

    logout(){
        this.props.navigation.navigate('Login');
        this.endSession();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#f5a25d', paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'row', flex: 2 }}>
                    <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#ffffff', paddingTop: 15, paddingLeft: 12 }}>Hi, Chef !</Text>
                    <View style={{ marginLeft: 150 }}>
                        <Image style={{ height: 80, width: 80, borderRadius: 200 }} source={{ uri: 'https://mybeautybrides.net/images/31-1566722393222.jpg' }} />
                        <TouchableOpacity style={{ paddingLeft: 30 }}>
                            <Text style={{ color: '#ffffff' }}>edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, flex: 2.4 }}>
                    <View style={{ paddingTop: 5 }}>
                        <Text style={{ paddingBottom: 5 }}>Name: Sunitha</Text>
                        <Text style={{ paddingBottom: 5 }}>Phone: +91-8545478785</Text>
                        <Text style={{ paddingBottom: 5 }}>Address: Yelahanka, Bengaluru</Text>
                        <Text style={{ paddingBottom: 5 }}>Email: sunitha@gmail.com</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f5a25d', paddingHorizontal: 10, flex: 2 }}>
                    <Text style={{ color: '#ffffff' }}>Net Earning</Text>
                    <Text style={{ color: '#06623b', fontWeight: 'bold', fontSize: 35, paddingTop: 7 }}>₹ 1859</Text>
                </View>
                <View style={{ paddingHorizontal: 10, flex: 2 }}>
                    <Text>Rating</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Icon name={'star'} size={35} style={{ color: '#f5a31a' }} />
                        <Icon name={'star'} size={35} style={{ color: '#f5a31a' }} />
                        <Icon name={'star'} size={35} style={{ color: '#f5a31a' }} />
                        <Icon name={'star'} size={35} style={{ color: '#f5a31a' }} />
                        <View style={{marginLeft: 'auto'}}>
                            <TouchableOpacity onPress={() => {this.navigateToCompleted()}} style={{ backgroundColor: '#00bcd4', height: 40, flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8, paddingHorizontal: 10 }}>Completed Orders</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#f5a25d', paddingHorizontal: 10, flex: 3 }}>
                    <Text style={{ color: '#ffffff' }}>FAQs</Text>
                </View>
                <View style={{ paddingHorizontal: 10, paddingTop: 18, flex: 1.3, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1, backgroundColor: '#00bcd4', height: 40, flexDirection: 'row', justifyContent: 'center', marginRight: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8 }}>Customer Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.logout()}} style={{ flex: 1, backgroundColor: '#ec0101', height: 40, flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8 }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}