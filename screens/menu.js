import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity  } from 'react-native';

import FoodCard from './../components/food_card';

export default class Menu extends Component {
    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', backgroundColor: '#79d70f', paddingVertical: 10}}>
                    <Text  style={{ fontSize: 34, fontWeight: 'bold', color: '#ffffff', paddingLeft: 12 }}>Menu</Text>
                    
                </View>
                <View style={{paddingBottom: 160}}>
                    <ScrollView>
                       <FoodCard imageUri='https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe-1366x768.jpg'
                            name='Chole Bhatoore'
                            cost='45'
                            count='2' />
                        <FoodCard imageUri='https://static.toiimg.com/thumb/55890466.cms?imgsize=164049&width=800&height=800'
                            name='Masala Baingan'
                            cost='30'
                            count='5' />
                        <FoodCard imageUri='https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2011/10/kadai-paneer-recipe-1-500x375.jpg'
                            name='Paneer Kadai'
                            cost='50'
                            count='1' />
                        <FoodCard imageUri='https://greenbowl2soul.com/wp-content/uploads/2020/01/Moong-Dal-Khichdi-recipe_1-500x500.jpg'
                            name='Masala Khichdi'
                            cost='25'
                            count='7' />
                        <FoodCard imageUri='https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Authentic-Punjabi-Rajma-Recipe.jpg'
                            name='Rajma'
                            cost='35'
                            count='3' />
                        <FoodCard imageUri='https://3.imimg.com/data3/JW/NE/MY-14276604/masala-chaach-500x500.jpg'
                            name='Chaach'
                            cost='10'
                            count='4' />
                    </ScrollView>
                </View>
            </View>
        )
    }
}