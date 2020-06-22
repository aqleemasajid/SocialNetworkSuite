import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import {Image,  Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import tabNavigator from './navigation/MainTabNavigator';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import ImagePicker from './screens/ImagePicker';
import MediaExp from './screens/MediaExp';
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (

      

      <AppNavigator/>
     
     
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}







const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(252,116,116)'
  },
  header:
  {
    height: 75,
    color: 'rgb(252,116,116)'
  },
  Image:
  {
    width: 50,
    height: 50,
    alignSelf: "flex-end",
    resizeMode: 'cover',
    left: 0,
    marginBottom: -90,
    marginTop: 35,
    borderRadius: 25
  },
  text:
  {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: -90,
    marginTop: 30

  },
  drawer:
  {
    flex:1
  }

});
