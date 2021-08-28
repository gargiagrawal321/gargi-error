import * as  React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Alert,TextInput } from 'react-native';
import {MyHeader} from "../components/MyHeader.js";
import db from "../config.js";
import firebase from "firebase";

export default class ContentCreation extends React.Component {
   constructor()
   {
      super();
      this.state={
         userId: "",
         kathak:"",
         description:"",
         link:"",
         }
   }
   updateCreation=()=>
   {
      db.collection("creation").add({
         "user_id": this.state.userId,
         "kathak":this.state.kathak,
         "description":this.state.description,
         "link":this.state.link,
      })

      this.setState({
         userId:"",
         kathak:"",
         description:"",
         link:"",
      })
      Alert.alert("Added the content successfully");
   }
   render(){
   return (
      <View>
      <MyHeader title="Create your own" navigation={this.props.navigation}/>
      <Text>Create a new content</Text>

      <TextInput
      placeholder="Kathak"
      style={styles.registerButton}
      onChangeText={(text)=>
      {
         this.setState({
            kathak: text
         });
      }}
      value={this.state.Kathak}
      />

      
      <TextInput
         style={styles.registerButton}
         multiline={true}
         numberOfLines={20}
         placeholder="Description"
         onChangeText={(text)=>
            {
               this.setState({
                  Description: text
               });
            }}
            value={this.state.Description}
     />

      <TextInput
      placeholder="Paste your Video Link here (embeded only)"
      style={[styles.registerButton,{width:"89%"}]}
      onChangeText={(text)=>
         {
            this.setState({
               link: text
            });
         }}
         value={this.state.link}/>

      <TouchableOpacity
      onPress={
         ()=>
         {
            this.updateCreation();
        }}><Text>Submit</Text></TouchableOpacity>
      </View>
      )
   }
 }
 const styles= StyleSheet.create({

 registerButton:{
  width:"80%",
  height:"10%",
  alignItems:'center',
  justifyContent:'center',
  borderWidth:1,
  borderRadius:10,
  marginTop:30,
  alignSelf:"center",
},
registerButtonText:{
  color:'#022e57',
  fontSize:20,
  fontWeight:'bold',
   fontFamily:"Itim",
},
})