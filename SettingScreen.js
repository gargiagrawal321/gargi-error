import * as React from "react";
import {StyleSheet, View, Text, TextInput , TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import {MyHeader} from "../components/MyHeader.js";
import db from "../config.js";
import firebase from 'firebase';

export default class SettingScreen extends React.Component {
    constructor()
    {
        super();
        this.state={
            userId:"",
            firstName:"",
            lastName:"",
            contact:"",
            address:"",
            emailId:"",
            docId:"",
        }
    }

    getAccountSettings=()=>
    {
       var email=firebase.auth().currentUser.email;
       db.collection('users').where("email_id","==", email).get()
       .then(snapshot=>{
        snapshot.forEach(doc=>
            {
                var data =doc.data()
                this.setState({
                    emailId: data.email_id,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    address: data.address,
                    contact: data.contact,
                    docId: doc.id
                })
            })
       })
    }

    changeAccountSettings=()=>
    {
        db.collection("users").doc(this.state.docId).update({
            "first_name":this.state.firstName,
            "last_name":this.state.lastName,
            "address":this.state.address,
            "contact":this.state.contact,
        })
    }
    componentDidMount()
    {
        this.getAccountSettings();
    }

    render(){
    return (
       <View>
        <MyHeader title="Change account settings" navigation={this.props.navigation}/>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Email"}
          keyboardType ={'email-address'}
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        /> 

           <TouchableOpacity onPress={()=>{
               this.changeAccountSettings();
           }}/>

       </View>
       )
    }
  }
  
  const styles=StyleSheet.create({
      text:
      {
          fontFamily:"Pattaya",
          fontSize:23,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#f9ed69',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
 })
  