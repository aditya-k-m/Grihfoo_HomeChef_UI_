import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default class FoodCard extends Component{
    render(){
        return(
            <View style={{marginVertical: 10, marginHorizontal: 10, borderWidth: 2, borderColor: '#e5e5e5'}}>
            <View style={{ flexDirection: 'row'}}>
                <View style={{flex: 3.5, paddingLeft: 10, paddingTop: 10}}>
                    <Text>Order Name: {this.props.name}</Text>
                    <Text>Cost: ₹{this.props.cost}</Text>
                    <Text>Remaining: {this.props.count}</Text>
                </View>
                <Image style={{ flex: 2, height: 120, width: 100 }} source={{uri: this.props.imageUri}} />
            </View>
            <View>
            <TouchableOpacity style={{ backgroundColor: '#fa1616', height: 40, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8 }}>Remove</Text>
            </TouchableOpacity>
            </View>
        </View>
        );
    }
}