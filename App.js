import React, { useState } from 'react';
import Routes from './src/routes'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as firebase from 'firebase';
import firebaseConfig from './src/config/firebaseConfig';
import { AppearanceProvider } from 'react-native-appearance';
import { StatusBar } from 'expo-status-bar';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const getFonts = async () => await Font.loadAsync(
  {
    'Lato': require('./src/assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
  });


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  return (
    <AppearanceProvider>
      { fontsLoaded ?
        (

          <Routes />
        ) :
        <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
          onError={console.warn}
        />
      }
      <StatusBar style="auto" />
    </AppearanceProvider>

  );
}
