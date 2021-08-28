import * as  React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator,createSwitchNavigator } from 'react-navigation';
import {createAppContainer} from "react-navigation";
import { TabNavigator } from "./components/TabNavigator.js";
import { DrawerNavigation } from "./components/DrawerNavigation.js";
import  WelcomeScreen from './screens/WelcomeScreen.js';
import * as Font from "expo-font";

export default class App extends React.Component {
   componentDidMount=async()=>{
    Font.loadAsync({
        Pattaya: require("./assets/Pattaya-Regular.ttf"),
        
    })
   }
  render(){
  return (
     <AppContainer/>
      )
    }
}

const switchNavigator= createSwitchNavigator({
   //WelcomeScreen: {screen: WelcomeScreen},
   Drawer:{screen: DrawerNavigation},
})


const AppContainer=createAppContainer(switchNavigator)
//cd@gmail.com
//12