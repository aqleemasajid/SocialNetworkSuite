import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';

import { MonoText } from '../components/StyledText';
import CameraRollPicker from 'react-native-camera-roll-picker';
import CameraRoll from '@react-native-community/cameraroll';
export default class HomeScreen extends React.Component {
  myImages()
  {
    alert("hi");
  }
  render()
  {
  return (
    <View >
     <ImageBackground style={styles.ImageBack}
          source={require('../assets/images/Theme.jpg')}
        >

      </ImageBackground>
    </View>
  );
  }
}







HomeScreen.navigationOptions = {
  header: null,
 
};




const styles = StyleSheet.create({
  
  ImageBack:
  {
   
    width: '100%',
    height: '100%'
  }

});