import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterPage from "../pages/auth/register";
import LoginPage from "../pages/auth/login";
import ResetPassword from "../pages/auth/resetPassword";

import { DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native-appearance';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  const scheme = useColorScheme();
  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: "blue",
      background: "#000023",
      card: "#000f39",
      text: "#FFFFFF",
      border: "#000028",
      notification: "#9933FF",
    }
  };
  return (
    <NavigationContainer theme={scheme === "dark" ? MyDarkTheme : DefaultTheme} independent={true}>
    <AuthStack.Navigator
      initialRouteName="Register"
      headerMode="none"
    >
      <AuthStack.Screen name="Register" component={RegisterPage} />
      <AuthStack.Screen name="Login" component={LoginPage} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
   </AuthStack.Navigator>
   </NavigationContainer>
  );
}
