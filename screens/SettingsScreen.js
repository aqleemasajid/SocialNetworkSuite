import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';


export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
     <ImageBackground style={styles.ImageBack}
          source={require('../assets/images/Theme.jpg')}
        >

      </ImageBackground>
    </View>

  );
}
SettingsScreen.navigationOptions = {
  header: null,
  
};



const styles = StyleSheet.create({
  container: {
   color:'pink'
  },
    
  ImageBack:
  {
   
    width: '100%',
    height: '100%'
  }
});