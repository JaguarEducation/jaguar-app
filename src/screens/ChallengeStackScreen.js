import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

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
  const { colors } = useTheme();
  return (
    <ChallengeStack.Navigator>
      <ChallengeStack.Screen
        name="Reto"
        component={ChallengeScreen}
        options={{
          title: 'Jaguar', //Set Header Title
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: '900', //Set Header text style
            paddingLeft: 13,
          },
          headerTitleAlign: 'left',
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('This is a button!')}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="bolt" size={24} color={colors.text} />
                <Text style={{ color: colors.text, fontSize: 18, fontWeight: '900' }} >14</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <ChallengeStack.Screen name="Lección" component={LessonScreen} />
    </ChallengeStack.Navigator>
  );
}

const styles = StyleSheet.create({

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 25,
    width: 75,
  },
});


export default ChallengeStackScreen; 