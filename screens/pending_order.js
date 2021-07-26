import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class PendingOrder extends Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Item</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Price</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <View>
                        <Text>Paneer Butter Masala</Text>
                        <Text>Tava Roti</Text>
                        <Text>Gulab Jamun</Text>
                    </View>
                    <View>
                        <Text>X 1</Text>
                        <Text>X 4</Text>
                        <Text>X 2</Text>
                    </View>
                    <View>
                        <Text>₹50</Text>
                        <Text>₹20</Text>
                        <Text>₹10</Text>
                    </View>
                </View>
                <View style={{marginLeft: 'auto', paddingHorizontal: 10, marginTop: 50}}>
                    <Text>Total: ₹70</Text>
                    <Text>GST (18%): ₹14.4</Text>
                    <Text>Net Revenue: ₹55.6</Text>
                </View>
                <View style={{paddingHorizontal: 10, marginTop: 50}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Customer Instructions</Text>
                    <Text>Please make it spicy and add some extra pickle</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, paddingHorizontal: 10, paddingBottom: 10, marginTop: 'auto' }}>
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