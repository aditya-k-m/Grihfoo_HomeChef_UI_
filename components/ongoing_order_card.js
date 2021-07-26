import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OngoingOrderCard extends Component {
    render() {
        return (
            <View style={{ borderWidth: 1, borderColor: '#d3d6db', margin: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text>{this.props.name}</Text>
                        <Text>Get it ready by: {this.props.readyTime}</Text>
                        <Text>Ordered: {this.props.orderTime}</Text>
                        <Text>Revenue: ₹{this.props.revenue}</Text>
                    </View>
                    <View style={{ marginLeft: 120 }}>
                        <Text>Hand over in:</Text>
                        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{this.props.timer} <Text style={{ fontSize: 12, fontWeight: 'normal' }}>min</Text></Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, paddingHorizontal: 10, paddingBottom: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: '#fa1616', height: 40, flexDirection: 'row', justifyContent: 'center', flex: 1, marginLeft: 5 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8 }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}