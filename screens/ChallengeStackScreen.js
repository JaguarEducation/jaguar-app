import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

import LessonScreen from './LessonScreen';

function ChallengeScreen({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.text }}>Pantalla de reto</Text>
      <Button
        title="Ir a lección"
        onPress={() => navigation.navigate('Lección')}
      />
    </View>
  );
}

const ChallengeStack = createStackNavigator();

const ChallengeStackScreen = () => {
  return (
    <ChallengeStack.Navigator>
      <ChallengeStack.Screen name="Reto" component={ChallengeScreen} />
      <ChallengeStack.Screen name="Lección" component={LessonScreen} />
    </ChallengeStack.Navigator>
  );
}


export default ChallengeStackScreen; 