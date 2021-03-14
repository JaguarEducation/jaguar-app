import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ButtonLesson from '../components/ButtonLesson';
import LessonScreen from './LessonScreen';
import SeparatorH from "../components/SeparatorH";
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 25, marginBottom: 25 }}>
        <ButtonLesson
          text="Intro"
          onPress={() => navigation.navigate('Lección', { type: "easy"})}
          icon={<FontAwesome5 name="egg" size={45} color="#f2f0eb" />}
        />
        <View style={styles.row}>
          <ButtonLesson
            text="Hola mundo"
            onPress={() => navigation.navigate('Lección', { type: "easy"})}
            icon={<FontAwesome name="child" size={45} color="#f2f0eb" />}
          />
          <ButtonLesson
            text="Entrada"
            onPress={() => navigation.navigate('Lección', { type: "easy"})}
            icon={<FontAwesome5 name="keyboard" size={45} color="#f2f0eb" />}
          />
          <ButtonLesson
            text="Variables"
            onPress={() => navigation.navigate('Lección', { type: "easy"})}
            icon={<FontAwesome5 name="memory" size={45} color="#f2f0eb" />}
          />
          <ButtonLesson
            text="Enteros"
            onPress={() => navigation.navigate('Lección', { type: "easy"})}
            icon={<MaterialCommunityIcons name="numeric" size={45} color="#f2f0eb" />}
          />
        </View>
      </View>
      <SeparatorH />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 25, marginBottom: 25 }}>
        <View style={styles.row}>
          <ButtonLesson
            text="Hola mundo 2"
            onPress={() => navigation.navigate('Lección', { type: "easy"})}
            icon={<FontAwesome name="child" size={45} color="#f2f0eb" />}
          />
          <ButtonLesson
            text="Entrada 2"
            onPress={() => navigation.navigate('Lección', { type: "easy"})}
            icon={<FontAwesome5 name="keyboard" size={45} color="#f2f0eb" />}
          />
          <ButtonLesson
            text="Variables 2"
            onPress={() => navigation.navigate('Lección', { type: "easy"})}
            icon={<FontAwesome5 name="memory" size={45} color="#f2f0eb" />}
          />
          <ButtonLesson
            text="Enteros 2"
            onPress={() => navigation.navigate('Lección', { type: "easy"})}
            icon={<MaterialCommunityIcons name="numeric" size={45} color="#f2f0eb" />}
          />
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
            <TouchableOpacity onPress={() => alert('This is a button!')}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="bolt" size={24} color={colors.text} />
                <Text style={{ color: colors.text, fontSize: 18, fontWeight: '900' }} >14</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen  name="Lección" component={LessonScreen} />
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
  row: {
    width: 230,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }
});

export default HomeStackScreen; 