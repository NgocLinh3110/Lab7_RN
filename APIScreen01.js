import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function APIScreen01({ navigation }) {
    return ( <
        View style = { styles.container } >
        <
        Text > Screen01 < /Text> <
        Button title = "Go to Screen02"
        onPress = {
            () => navigation.navigate('Screen02') } > < /Button> <
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