import React from 'react';
import {View, ScrollView, StyleSheet, ImageBackground } from 'react-native';


export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.ImageBack}
          source={require('../assets/images/Theme.jpg')}
        >

      </ImageBackground>
     
    </View>
  );
}

LinksScreen.navigationOptions = {
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
