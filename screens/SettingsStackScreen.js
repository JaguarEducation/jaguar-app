import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

import DetailsScreen from './DetailsScreen';

function SettingsScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors.text }}>Pantalla de configuración</Text>
            <Button
                title="Ir a detalles"
                onPress={() => navigation.navigate('Detalles')}
            />
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