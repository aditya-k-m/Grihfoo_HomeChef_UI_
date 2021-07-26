import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import Modal from 'react-native-modal';

import PastOrderCard from './../components/past_order_card';

export default class CompletedOrder extends Component {

    constructor(props){
        super(props);
        this.state={
            isModalVisible: false,
            name: "Gobi Masala",
            orderDate: "12.08.2019",
            revenue: "₹ 35"
        }
    }

    closeModal(){
        this.setState({
            isModalVisible: false
        })
    }

    openModal(){
        this.setState({
            isModalVisible: true
        })
    }

    render(){
        return(
            <View>
            <View>
            <ScrollView>
                <TouchableOpacity onPress={() => {this.openModal()}}>
                <PastOrderCard name="Gobi Masala" orderDate="12.08.2019" revenue="35"/>
                </TouchableOpacity>
                <PastOrderCard name="Bhindi Masala" orderDate="15.08.2019" revenue="58"/>
                <PastOrderCard name="Paneer Chilli" orderDate="22.09.2019" revenue="25"/>
                <PastOrderCard name="Aloo Masala" orderDate="30.10.2019" revenue="20"/>
                <PastOrderCard name="Aloo Masala" orderDate="30.10.2019" revenue="20"/>
                <PastOrderCard name="Aloo Masala" orderDate="30.10.2019" revenue="20"/>
                <PastOrderCard name="Aloo Masala" orderDate="30.10.2019" revenue="20"/>
                <PastOrderCard name="Aloo Masala" orderDate="30.10.2019" revenue="20"/>
                <PastOrderCard name="Aloo Masala" orderDate="30.10.2019" revenue="20"/>
                <PastOrderCard name="Aloo Masala" orderDate="30.10.2019" revenue="20"/>
            </ScrollView>
            </View>
            <Modal animationIn="slideInUp"
                    animationOut="slideOutDown"
                    onBackdropPress={() => this.closeModal()}
                    isVisible={this.state.isModalVisible}
                    style={{ backgroundColor: 'white', maxHeight: Dimensions.get('window').height / 2, marginTop: 'auto', marginBottom: 'auto' }}>
                        <View style={{marginHorizontal: 10, marginVertical: 10}}>
                        <Text>Items: {this.state.name}</Text>
                        <Text>Order Date: {this.state.orderDate}</Text>
                        <Text>Revene Earned: {this.state.revenue}</Text>
                        </View>
            </Modal>
            </View>
        )
    }
}