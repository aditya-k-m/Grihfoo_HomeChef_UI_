import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Broadcast extends Component
{
    render(){
        return(
            <View>
            <View style={{flexDirection: 'row', backgroundColor: '#8bcdcd', paddingVertical: 10}}>
                    <Text  style={{ fontSize: 34, fontWeight: 'bold', color: '#ffffff', paddingLeft: 12 }}>Broadcast</Text>
            </View>
            <View style={{paddingHorizontal: 10, marginTop: 20}}>
            <TextInput 
                   placeholder= 'Item Name'
                   style={{textAlign:'left',borderWidth:1, marginVertical: 5, height: 38}}
                 />
            <TextInput 
                   placeholder= 'Cost'
                   style={{textAlign:'left',borderWidth:1, marginVertical: 5, height: 38}}
                   keyboardType={'numeric'}
                 />
            <View style={{marginVertical: 5, flexDirection: 'row'}}>
            <TextInput 
                   placeholder= 'Accept by'
                   style={{textAlign:'left',borderWidth:1, flex: 1, marginRight: 5, height: 38}}
                   keyboardType={'numeric'}
                 />
            <TextInput 
                   placeholder= 'Ready by'
                   style={{textAlign:'left',borderWidth:1, flex: 1, marginLeft: 5, height: 38}}
                   keyboardType={'numeric'}
                 />
            </View>
            </View>
            <View style={{marginHorizontal: 10, marginTop: 10, borderWidth: 1, borderStyle: 'dotted', borderColor: '#e5e5e5'}}>
                <Text style={{paddingTop: 5, paddingHorizontal: 5}}>Choose Image</Text>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <TouchableOpacity style={{flex:1}}>
                    <Image source={{uri: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/06/Matar-Paneer-Thumbnail.jpg'}} 
                        style={{height: 130, width: 130}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1, paddingHorizontal: 5}}>
                    <Image source={{uri: 'https://static.toiimg.com/photo/53251884.cms'}} 
                        style={{ height: 130, width: 130}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}}>
                    <Image source={{uri: 'https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/06/Matar-Paneer-Recipe-Step-By-Step-Instructions.jpg?fit=3155%2C3024&quality=65&strip=all&ssl=1'}} 
                        style={{height: 130, width: 130}} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginTop: 130, paddingHorizontal: 10}}>
            <TouchableOpacity style={{ backgroundColor: '#335d2d', height: 60, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 18 }}>Broadcast</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}