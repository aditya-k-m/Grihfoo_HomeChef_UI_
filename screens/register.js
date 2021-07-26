import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default class Register extends Component {

    constructor(props){
        super(props);
        this.url = 'http://192.168.1.10:8080/'; 
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
        }
    }

    updateFirstName(value){
        this.setState({
            firstName: value
        });
    }

    updateLastName(value){
        this.setState({
            lastName: value
        });
    }

    updateEmail(value){
        this.setState({
            email: value
        });
    }

    submit(){
        this.registerHomemaker();
    }

    //Asynchronous
    async registerHomemaker() {
        try {
            await fetch(this.url+"api/homemaker/register", {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'username': this.props.navigation.getParam('username', '0'),
                    'firstname': this.state.firstName,
                    'lastname': this.state.lastName,
                    'email': this.state.email,
                    'address': 'address'
                })
            })
            .then((response) => {
                console.log("Server Code for RegisterHomemaker Hit : "+response.status);
                if(response.status == 204){
                    console.log("Successfully Registered User");
                    this.props.navigation.navigate('TabNav');
                }
                else {
                    this.setState({
                        firstName: "",
                        lastName: "",
                        email: ""
                    });
                }
            }) 
        }
        catch (e) {
            console.log("Error encoutered while hitting Register Homemaker API :"+e);
        }
    }

    

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{marginTop: 'auto', marginBottom: 'auto', alignItems: 'center'}}>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>Enter your Details !</Text>
                <TextInput placeholder="Enter first name" style={{textAlign: 'center'}} onChangeText={(value) => this.updateFirstName(value)} />
                <TextInput placeholder="Enter last name" style={{textAlign: 'center'}} onChangeText={(value) => this.updateLastName(value)} />
                <TextInput placeholder="Enter email" style={{textAlign: 'center'}} onChangeText={(value) => this.updateEmail(value)} />
                <TouchableOpacity onPress={() => {this.submit()}} style={{ backgroundColor: '#31326f', height: 40, flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderColor: '#e8e8e8' }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8, paddingHorizontal: 10 }}>Submit</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    OTPinput: {
        backgroundColor: '#f5f4f2',
        justifyContent: 'center',
        fontWeight: '600',
        alignSelf: "center",
        fontSize: 18,
        height: 45,
        width: '10%',
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: 'grey',
        textAlign: 'center',
        marginBottom: 0
    }
})