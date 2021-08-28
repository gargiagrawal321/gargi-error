import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { TabNavigator } from "./TabNavigator.js";
import SettingScreen from "../screens/SettingScreen.js";
import CustomSideBarMenu from "./CustomSideBarMenu.js";

export const DrawerNavigation =createDrawerNavigator(
    {
        Home:{screen: TabNavigator},
        SettingScreen:{screen: SettingScreen},
    },
    {
        contentComponent: CustomSideBarMenu
    },
    {
        initialRouteName: "Home"
    }
)