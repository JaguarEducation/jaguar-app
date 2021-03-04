import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

import LessonScreen from './LessonScreen';

function HomeScreen({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.text }}>Pantalla principal</Text>
      <Button
        title="Ir a lección"
        onPress={() => navigation.navigate('Lección')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Inicio" component={HomeScreen} />
      <HomeStack.Screen name="Lección" component={LessonScreen} />
    </HomeStack.Navigator>
  );
}


export default HomeStackScreen; 