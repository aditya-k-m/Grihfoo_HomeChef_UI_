import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import PendingOrderCard from './../components/pending_order_card';
import OngoingOrderCard from './../components/ongoing_order_card';


export default class Home extends Component {

    navigateToPending(){
        this.props.navigation.navigate('PendingOrder');
    }

    navigateToOngoing(){
        this.props.navigation.navigate('OngoingOrder');
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', paddingVertical: 10, backgroundColor: '#ffd700', borderBottomWidth: 2, borderBottomColor: '#d3d6db'}}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginLeft: 10, marginTop: 12, color: '#ffffff' }}>Hi Chef, What's in your kitchen today ?</Text>
                    <Image style={{ height: 50, width: 50, borderRadius: 200, marginLeft: 43 }} source={{ uri: 'https://mybeautybrides.net/images/31-1566722393222.jpg' }} />
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#d3d6db'}}>
                    <Text style={{ paddingLeft: 10, paddingTop: 10 }}>Orders pending for confirmation</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                        <TouchableOpacity onPress={() => {this.navigateToPending()}}>
                        <PendingOrderCard name="Paneer Butter Masala" time="01:00 PM" cost="51" />
                        </TouchableOpacity>
                        <PendingOrderCard name="Gobi Masala" time="12:58 PM" cost="25" />
                        <PendingOrderCard name="Fried Rice" time="12:55 PM" cost="30" />
                        <PendingOrderCard name="Dal Tadka" time="01:02 PM" cost="28" />
                    </ScrollView>
                </View>
                    <Text style={{marginLeft: 10}}>Ongoing Orders</Text>
                    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{paddingBottom: 280}}>
                    <TouchableOpacity onPress={() => {this.navigateToOngoing()}}>
                    <OngoingOrderCard name="Paneer Butter Masala" readyTime="01:30 PM" orderTime="01:10 PM" revenue="51" timer="17"/>
                    </TouchableOpacity>
                    <OngoingOrderCard name="Gobi Masala" readyTime="01:15 PM" orderTime="12:50 PM" revenue="35" timer="2"/>
                    <OngoingOrderCard name="Dal Tadka" readyTime="01:40 PM" orderTime="01:13 PM" revenue="28" timer="22"/>
                    <OngoingOrderCard name="Paneer Butter Masala" readyTime="01:17 PM" orderTime="01:12 PM" revenue="51" timer="4"/>
                    </ScrollView>
            </View>
        )
    }
}



