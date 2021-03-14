import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import { useTheme } from '@react-navigation/native';

import DetailsScreen from './DetailsScreen';

function SettingsScreen({ navigation }) {
    const { colors } = useTheme();
    console.log(firebase.auth().currentUser.displayName);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color: colors.text}}>{ firebase.auth().currentUser.displayName }</Text>
            <Text style={{color: colors.text}}>{ firebase.auth().currentUser.email }</Text>
            <Button title="Salir"onPress={async () => { firebase.auth().signOut() }}/>
        </View>
    );
}

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Configuración" component={SettingsScreen} />
            <SettingsStack.Screen name="Detalles" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}


export default SettingsStackScreen; 