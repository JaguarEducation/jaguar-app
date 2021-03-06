import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ButtonLesson from '../components/ButtonLesson';
import LessonScreen from './LessonScreen';


const icono1 = <MaterialCommunityIcons name="numeric" size={45} color="#f2f0eb" onPress={() => navigation.navigate('Lección')} />;

function HomeScreen({ navigation }) {
  const { colors } = useTheme();
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
        <View>
          <ButtonLesson
            text="Intro"
            icon={<FontAwesome5 name="egg" size={45} color="#f2f0eb" onPress={() => navigation.navigate('Lección')} />}
          />
          <View style={styles.row}>
            <ButtonLesson
              text="Hola mundo"
              icon={<FontAwesome name="child" size={45} color="#f2f0eb" onPress={() => navigation.navigate('Lección')} />}
            />
            <ButtonLesson
              text="Entrada"
              icon={<FontAwesome5 name="keyboard" size={45} color="#f2f0eb" onPress={() => navigation.navigate('Lección')} />}
            />
            <ButtonLesson
              text="Variables"
              icon={<FontAwesome5 name="memory" size={45} color="#f2f0eb" onPress={() => navigation.navigate('Lección')} />}
            />
            <ButtonLesson
              text="Variables"
              icon={<MaterialCommunityIcons name="numeric" size={45} color="#f2f0eb" onPress={() => navigation.navigate('Lección')} />}
            />
          </View>

        </View>
      </View>
    </ScrollView>
  );
}

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {

  const { colors } = useTheme();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          title: 'Jaguar', //Set Header Title
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: '900', //Set Header text style
            paddingLeft: 13,
          },
          headerTitleAlign: 'left',
          headerRight: () => (
            <View style={styles.iconContainer}>
              <FontAwesome5 name="bolt" size={24} color={colors.text} onPress={() => alert('This is a button!')} />
              <Text style={{ color: colors.text, fontSize: 18, fontWeight: '900' }} >14</Text>
            </View>
          ),
        }}
      />
      <HomeStack.Screen name="Lección" component={LessonScreen} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 25,
    width: 75,
  },
  textHeader: {
    fontSize: 20,
  },
  row: {
    width: 230,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }
});

export default HomeStackScreen; 