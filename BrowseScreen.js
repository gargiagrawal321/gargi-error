import * as React from "react";
import {StyleSheet, View, Text, FlatList} from "react-native";
import * as Font from "expo-font";
import {ListItem} from "react-native-elements";
import { MyHeader } from "../components/MyHeader.js";
import db from "../config.js";
import firebase from "firebase";

export default class BrowseScreen extends React.Component {
    constructor()
    {
        super();
        this.state={
            allContent:[],
        }
    }

    getContent()
    {
        var allContent=[];
        db.collection("creation").onSnapshot((snapshot)=>
        {
            snapshot.forEach((doc)=>
            {
                allContent.push(doc.data());
            })
        })
        this.setState({
            allContent: allContent
        })
    }

    keyExtractor=(item,index)=>index.toString(); 

    renderItem({item,i})
    {
        return(
        <ListItem key={i} bottomDivider>
        <ListItem.Content>
            <ListItem.Title>{item.kathak}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                
                <TouchableOpacity onPress={()=>
                    {
                        this.props.navigation.navigate("BrowseDetailsScreen")
                    }}>
                    <Text>View in detail</Text>
                </TouchableOpacity>

            </ListItem.Content>
          </ListItem>
        )
    }

    componentDidMount=async()=>{
        this.getContent();
    }

    render(){
    return (
       <View>
        <MyHeader title="Browse" navigation={this.props.navigation}/>
       <Text style={styles.text}>Browse your favorite Kathak Videos</Text>
       <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.allContent}
            renderItem={this.renderItem}
       />
       </View>
       )
    }
  }
  
  const styles=StyleSheet.create({
      text:
      {
          fontFamily:"Pattaya",
          fontSize:23,
          alignSelf:"center",
          textAlign:"center",
      },
 })
  