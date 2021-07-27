import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import CompletedOrder from './../screens/completed_order';
import PendingOrder from './../screens/pending_order';
import OngoingOrder from './../screens/ongoing_order';
import Home from './../screens/home';
import TabNav from './tab_navigation';
import Profile from '../screens/profile';
import Login from '../screens/login';
import Register from '../screens/register';
import RegisterNumber from '../screens/registerNumber';
import ContactUs from '../screens/contact_us';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    TabNav: {
        screen: TabNav,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    OngoingOrder: {
        screen: OngoingOrder,
        navigationOptions: {
            headerShown: true,
            title: 'Ongoing Order'
        }
    },
    PendingOrder: {
        screen: PendingOrder,
        navigationOptions: {
            headerShown: true,
            title : 'Confirm Order'
        }
    },
    CompletedOrder: {
        screen: CompletedOrder,
        navigationOptions: {
            headerShown: true,
            title: 'Completed Orders'
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerShown: false
        }
    },
    RegisterNumber: {
        screen: RegisterNumber,
        navigationOptions: {
            headerShown: false
        }
    },
    ContactUs: {
        screen: ContactUs,
        navigationOptions: {
            headerShown: false
        }
    }
}

const navigationStack = createStackNavigator(screens);

export default createAppContainer(navigationStack);