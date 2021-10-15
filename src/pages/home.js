import * as React from 'react';
import { DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
//Screens
import HomeStackScreen from '../screens/HomeStackScreen';
import ChallengeStackScreen from '../screens/ChallengeStackScreen';
import PaperStackScreen from '../screens/PaperStackScreen';
import SettingsStackScreen from '../screens/SettingsStackScreen';

const Tab = createBottomTabNavigator();

function Home() {

  const scheme = useColorScheme();

  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: "blue",
      background: "#000023",
      card: "#000023",
      text: "#FFFFFF",
      border: "#000020",
      notification: "#9933FF",
    }
  };
  const MyLigthTheme = {
    dark: false,
    colors: {
      background: "white",
      card: "white",
      border: "rgb(250,250,250)",
    }
  };
  return (
    <NavigationContainer theme={scheme === "dark" ? MyDarkTheme : MyLigthTheme} independent={true}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Inicio':
              iconName = focused
                ? 'centercode'
                : 'centercode';
              break;

            case 'Reto':
              iconName = focused
                ? 'clock'
                : 'clock';
              break;

            case 'Teoría':
              iconName = focused
                ? 'newspaper'
                : 'newspaper';
              break;

            case 'Configuración':
              iconName = focused
                ? 'cog'
                : 'cog';
              break;
          }
          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Inicio" component={HomeStackScreen} />
        <Tab.Screen name="Reto" component={ChallengeStackScreen} />
        <Tab.Screen name="Teoría" component={PaperStackScreen} />
        <Tab.Screen name="Configuración" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default (

) => (
  <AppearanceProvider>
    <Home />
    <StatusBar style="auto" />
  </AppearanceProvider>
);
