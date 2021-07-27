import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class RegisterNumber extends Component {

    constructor(props){
        super(props);
        this.url = 'http://192.168.1.10:8080/'; 
        this.state = {
            isModalVisible: false,
            pin1: "",
            pin2: "",
            pin3: "",
            pin4: "",
            pin5: "",
            pin6: "",
            number: "",
            jwt: ""
        }
    }

    closeModal() {
        this.setState({
            isModalVisible: false
        });
    }

    getOTP() {
        // this.props.navigation.navigate('TabNav')
        this.verifyHomemaker();
    }

    submitOTP() {
        this.setState({
            isModalVisible: false
        });
        this.generateJWT();
    }


    updateNumber(value){
        this.setState({
            number: value
        });
    }


    //Asynchronous
    async verifyHomemaker(){
        try {
            await fetch(this.url+'api/homemaker/'+this.number, {
                method: 'GET',
                mode: 'no-cors'
            })
            .then((response) => {
                console.log("Status of verify homemaker : "+response.status);
                return response.json();
            })
            .then((ifValid) => {
                console.log(ifValid);
                if(ifValid){
                    this.props.navigation.navigate("Login");
                }
                else {
                    this.generateRegistrationOTP();
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    async generateRegistrationOTP(){
        try {
            await fetch(this.url+'api/homemaker/generateRegisterOtp/'+this.state.number, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    'username' : this.state.number,
                    'password' : ''
                })
            })
            .then (response => {
                console.log("The Status Code for /generateHomemakerOTPRegistration is "+response.status);
                if (response.status == 204){
                    this.setState({
                        isModalVisible: true
                    });
                } else {
                    this.setState({
                        number: ''
                    });
                }
                return response.json();
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    async generateJWT() {
        try {
            await fetch(this.url+'api/homemaker/generateTokenRegister', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    'username': this.state.number,
                    'password': this.state.pin1+this.state.pin2+this.state.pin3+this.state.pin4+this.state.pin5+this.state.pin6 
                })
            })
            .then(response => {
                console.log("Status Code for /generateJWT is : "+response.status);
                if(response.status == 200){
                    return response.json();
                } else {
                    alert("OTP authentication failed");
                    this.props.navigation.navigate('RegisterNumber');
                }
            })
            .then(token => {
                console.log("Token Generated : "+token.token);
                this.setState({
                    jwt: token.token
                });
                this.startSession();
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    async startSession() {
        try {
            await AsyncStorage.setItem("sessionId", this.state.jwt);
            this.props.navigation.navigate('Register', {
                username: this.state.number
            });
        }
        catch (error){
            console.log("Error saving data: "+error);
        }
    }
    

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{marginTop: 'auto', marginBottom: 'auto', alignItems: 'center'}}>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>New User ?</Text>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>Register to Grihfoo !</Text>
                <TextInput placeholder="Enter your number" style={{textAlign: 'center'}} onChangeText={(value) => this.updateNumber(value)} />
                <TouchableOpacity onPress={() => {this.getOTP()}} style={{ backgroundColor: '#31326f', height: 40, flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderColor: '#e8e8e8' }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8, paddingHorizontal: 10 }}>Get OTP</Text>
                </TouchableOpacity>
                </View>

                <Modal animationIn="slideInUp"
                    animationOut="slideOutDown"
                    onBackdropPress={() => this.closeModal()}
                    isVisible={this.state.isModalVisible}
                    style={{ backgroundColor: 'white', maxHeight: Dimensions.get('window').height / 4, marginTop: 'auto', marginBottom: 'auto' }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5 }}>We have sent an OTP to your number</Text>
                    <View style={{ flex: 1, paddingTop: 25 }}>
                        <View style={{ flex: 0.6, justifyContent: 'space-evenly', flexDirection: "row" }}>
                            <TextInput
                                ref={'pin1ref'}
                                maxLength={1}
                                //placeholder = {"Enter your name"}
                                onChangeText={(pin1) => {
                                    this.setState({ pin1: pin1 })
                                    if (pin1 != "") {
                                        this.refs.pin2ref.focus()
                                    }
                                }}
                                value={this.state.pin1}
                                style={styles.OTPinput}
                                keyboardType={'numeric'}

                            />
                            <TextInput
                                ref={'pin2ref'}
                                maxLength={1}
                                onChangeText={(pin2) => {
                                    this.setState({ pin2: pin2 })
                                    if (pin2 != "") {
                                        this.refs.pin3ref.focus()
                                    }
                                }}
                                value={this.state.pin2}
                                //placeholder = {"Enter your name"}
                                style={styles.OTPinput}
                                keyboardType={'numeric'}
                            />
                            <TextInput
                                ref={'pin3ref'}
                                maxLength={1}
                                onChangeText={(pin3) => {
                                    this.setState({ pin3: pin3 })
                                    if (pin3 != "") {
                                        this.refs.pin4ref.focus()
                                    }
                                }}
                                value={this.state.pin3}
                                //placeholder = {"Enter your name"}
                                style={styles.OTPinput}
                                keyboardType={'numeric'}
                            />
                            <TextInput
                                ref={'pin4ref'}
                                maxLength={1}
                                onChangeText={(pin4) => {
                                    this.setState({ pin4: pin4 })
                                    if (pin4 != "") {
                                        this.refs.pin5ref.focus()
                                    }
                                }
                                }
                                value={this.state.pin4}
                                //placeholder = {"Enter your name"}
                                style={styles.OTPinput}
                                keyboardType={'numeric'}
                            />
                            <TextInput
                                ref={'pin5ref'}
                                maxLength={1}
                                //placeholder = {"Enter your name"}
                                onChangeText={(pin5) => {
                                    this.setState({ pin5: pin5 })
                                    if (pin5 != "") {
                                        this.refs.pin6ref.focus()
                                    }
                                }}
                                value={this.state.pin5}
                                style={styles.OTPinput}
                                keyboardType={'numeric'}

                            />
                            <TextInput
                                ref={'pin6ref'}
                                maxLength={1}
                                //placeholder = {"Enter your name"}
                                onChangeText={(pin6) => {
                                    this.setState({ pin6: pin6 })
                                }}
                                value={this.state.pin6}
                                style={styles.OTPinput}
                                keyboardType={'numeric'}

                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { this.submitOTP() }} style={{ backgroundColor: '#31326f', height: 40, flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderColor: '#e8e8e8' }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8, paddingHorizontal: 10 }}>Submit</Text>
                    </TouchableOpacity>
                </Modal>
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