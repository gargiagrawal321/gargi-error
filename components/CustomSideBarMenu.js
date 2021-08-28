import * as React from 'react';
import { View, Text, Stylesheet, TouchableOpacity, } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';


export default class CustomSideBarMenu extends React.Component
{
    render()
    {
        return(
            <View>
               <DrawerItems {...this.props}/>
               <TouchableOpacity>
                   <Text>Log Out</Text>
                   </TouchableOpacity>
             </View>
        )
    }

}