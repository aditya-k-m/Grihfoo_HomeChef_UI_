import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.url = 'http://192.168.1.10:8080/';
        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    updateName(value){
        this.setState({
            name: value
        });
    }

    updateEmail(value){
        this.setState({
            email: value
        });
    }

    updateMessage(value){
        this.setState({
            message: value
        });
    }

    submitMessage(){
        console.log("Submit Pressed");
        this.contact();
    }


    //Asynchronous
    async contact(){
        try{
            fetch(this.url+'api/homemaker/contact', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    "name": this.state.name,
                    "email": this.state.email,
                    "message": this.state.message
                })
            })
            .then(response => {
                console.log("Error Code for /contact is :"+response.status);
                if(response.status == 204){
                    console.log("Message Submitted Successfully");
                    alert("Message Submitted Successfully");
                    this.props.navigation.navigate("Login");
                }
            })
        }
        catch(e) {
            console.log(e);
        }
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput placeholder='Enter your name' value={this.state.name} style={{ textAlign: 'center' }}
                    onChangeText={value => this.updateName(value)} />
                <TextInput placeholder='Enter your email' value={this.state.email} style={{ textAlign: 'center' }}
                    onChangeText={value => this.updateEmail(value)} />
                <TextInput placeholder='Tell us about your problem ...'
                    value={this.state.message}
                    multiline={true}
                    numberOfLines={10}
                    style={{ textAlign: 'justify' }}
                    onChangeText={value => this.updateMessage(value)} />
                <TouchableOpacity onPress={() => { this.submitMessage() }} style={{ backgroundColor: '#31326f', height: 40, flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderColor: '#e8e8e8' }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8, paddingHorizontal: 10 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}