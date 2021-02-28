import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { FontAwesome5 } from '@expo/vector-icons';

let themeTextStyle;

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[styles.text, themeTextStyle]}>Pantalla principal</Text>
      <Button
        title="Ir a lección"
        onPress={() => navigation.navigate('Lección')}
      />
    </View>
  );
}

function LessonScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[styles.text, themeTextStyle]}>Lección</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[styles.text, themeTextStyle]}>Detalles</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[styles.text, themeTextStyle]}>Pantalla de configuración</Text>
      <Button
        title="Ir a detalles"
        onPress={() => navigation.navigate('Detalles')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Inicio" component={HomeScreen} />
      <HomeStack.Screen name="Lección" component={LessonScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Configuración" component={SettingsScreen} />
      <SettingsStack.Screen name="Detalles" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {

  const scheme = useColorScheme();

  themeTextStyle = scheme === 'light' ? styles.lightThemeText : styles.darkThemeText;


  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: "blue",
      background: "#000023",
      card: "#000028",
      text: "#FFFFFF",
      border: "#000028",
      notification: "#9933FF",
    }
  };
  return (
    <NavigationContainer theme={scheme === "dark" ? MyDarkTheme : DefaultTheme}>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused
                ? 'centercode'
                : 'centercode';
            } else if (route.name === 'Configuración') {
              iconName = focused
                ? 'cog' 
                : 'cog';
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
        <Tab.Screen name="Inicio" component={HomeStackScreen}/>
        <Tab.Screen name="Configuración" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  lightThemeText: {
    color: '#242C40',
  },
  darkThemeText: {
    color: '#D0D0C0',
  },
});

export default () => (
  <AppearanceProvider>
    <App />
  </AppearanceProvider>
);