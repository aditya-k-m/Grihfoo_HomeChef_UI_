import React, { Component } from 'react';
import { View, Text} from 'react-native';

export default class PastOrderCard extends Component {
    render() {
        return (
            <View style={{ borderWidth: 1, borderColor: '#d3d6db', margin: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text>{this.props.name}</Text>
                        <Text>Order Date: {this.props.orderDate}</Text>
                        <Text>Revenue Earned: ₹{this.props.revenue}</Text>
                    </View>
                </View>
            </View>
        )
    }
}