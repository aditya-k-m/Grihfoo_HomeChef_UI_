import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class PendingOrderCard extends Component {
    render() {
        return (
            <View style={{ borderWidth: 1, borderColor: '#d3d6db', width: 250, margin: 10 }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text>{this.props.name}</Text>
                    <Text>Ordered: {this.props.time}</Text>
                    <Text>Earn ₹{this.props.cost}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, paddingHorizontal: 10, paddingBottom: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: '#79d70f', height: 40, flexDirection: 'row', justifyContent: 'center', flex: 1, marginRight: 5 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8 }}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#fa1616', height: 40, flexDirection: 'row', justifyContent: 'center', flex: 1, marginLeft: 5 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8 }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}