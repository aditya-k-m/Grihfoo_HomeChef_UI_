import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from './../screens/home';
import Profile from './../screens/profile';
import Broadcast from './../screens/broadcast';
import Menu from './../screens/menu';

const TabNav = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                activeColor: '#ffffff',
                inactiveColor: '#000000',
                barStyle: { backgroundColor: '#ffd700' },
                tabBarIcon: () => (
                    <View>
                        <Icon name={'home'} size={25} style={{ color: '#ff0000' }} />
                    </View>
                )
            }
        },
        Broadcast: {
            screen: Broadcast,
            navigationOptions: {
                tabBarLabel: 'Broadcast',
                activeColor: '#ffffff',
                inactiveColor: '#000000',
                barStyle: { backgroundColor: '#8bcdcd' },
                tabBarIcon: () => (
                    <View>
                        <Icon name={'totop'} size={25} style={{ color: '#ff0000' }} />
                    </View>
                )
            }
        },

        Menu: {
            screen: Menu,
            navigationOptions: {
                tabBarLabel: 'Menu',
                activeColor: '#ffffff',
                inactiveColor: '#000000',
                barStyle: { backgroundColor: '#79d70f' },
                tabBarIcon: () => (
                    <View>
                        <Icon name={'shoppingcart'} size={25} style={{ color: '#ff0000' }} />
                    </View>
                )
            }

        },

        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                activeColor: '#ffffff',
                inactiveColor: '#000000',
                barStyle: { backgroundColor: '#f5a25d' },
                tabBarIcon: () => (
                    <View>
                        <Icon name={'user'} size={25} style={{ color: '#ff0000' }} />
                    </View>
                )
            }

        },

    }
);

export default createAppContainer(TabNav);