import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function APIScreen02({ navigation }) {
    return ( <
        View style = { styles.container } >
        <
        Text > Screen02 < /Text> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00CCF9",
        alignItems: "center",
        justifyContent: "center",
    },

});