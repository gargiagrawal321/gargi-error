import * as  React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BrowseScreen from "../screens/BrowseScreen.js";
import ContentCreation from "../screens/ContentCreation.js";


export const TabNavigator=createBottomTabNavigator({
    BrowseScreen:{screen: BrowseScreen},
    ContentCreation:{screen: ContentCreation},
  })
  