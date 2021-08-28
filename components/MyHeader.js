import * as React from "react";
import { Header,Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

export const MyHeader=(props)=>
{
    return(
        <View>
        <SafeAreaProvider>
            <Header 
            leftComponent={<Icon type="font-awesome" name="bars" onPress={()=> {props.navigation.toggleDrawer()}}/>}
            centerComponent={{text: props.title , style:{color:"black", fontSize:20, fontWeight:"bold"}}} />
        </SafeAreaProvider>
        </View>
    )
}