import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import APIScreen01 from './APIScreen01'
import APIScreen02 from './APIScreen02'

export default function App() {
    return ( <
        NavigationContainer >
        <
        Stack.Navigator initialRouteName = "Screen01" >
        <
        Stack.Screen name = "Screen01"
        component = { APIScreen01 }
        /> <
        Stack.Screen name = "Screen02"
        component = { APIScreen02 }
        /> <
        /Stack.Navigator> <
        /NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00CCF9",
        alignItems: "center",
        justifyContent: "center",
    },

});