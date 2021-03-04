import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

import LessonScreen from './LessonScreen';

function PaperScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: colors.text }}>Pantalla de teoria</Text>
            <Button
                title="Ir a lección"
                onPress={() => navigation.navigate('Lección')}
            />
        </View>
    );
}

const PaperStack = createStackNavigator();

const PaperStackScreen = () => {
    return (
        <PaperStack.Navigator>
            <PaperStack.Screen name="Teoría" component={PaperScreen} />
            <PaperStack.Screen name="Lección" component={LessonScreen} />
        </PaperStack.Navigator>
    );
}


export default PaperStackScreen; 