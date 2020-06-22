import React from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';


export default function Profile() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
       <ImageBackground style={styles.ImageBack}
          source={require('../assets/images/Theme.jpg')}
        >
      <View style={styles.header}>
        <Text style={styles.text}> Profile</Text>
      </View>
      <View style={styles.componentCont}> 
      <Image style={styles.Image}
          source={require('../assets/images/selena.jpg')}
        />
        <Text style={styles.innerText}>
            Username: aqleema_sajid
        </Text>
        <Text style={styles.innerText2}>
            Contact no: 090078601
        </Text>
        <TouchableOpacity style={styles.Button}>
            <Text style={{  fontSize: 16, color: 'white'}}>
                Edit Profile
            </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'rgb(252,116,116)'
    },
    header:
    {
      height: 50,
      
      marginTop: 35,
      
      backgroundColor: 'black'
    },
    Image:
    {
      width: 80,
      height: 80,
      alignSelf: "center",
      resizeMode: 'cover',
      left: 0,
      marginBottom: -90,
      marginTop: 35,
      borderRadius: 40
    },
    text:
    {
      fontWeight: 'bold',
      fontSize: 25,
      alignSelf: 'center',
      marginBottom: -90,
      marginTop: 5,
      color: 'white'
  
    },
    drawer:
    {
      flex:1
    },
    innerText:
    {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        
        marginTop: 100
    },
    innerText2:
    {
        fontWeight: 'bold', 
        fontSize: 18,
        alignSelf: 'center',
        
        marginTop: 15
    },
    componentCont:
    {
      marginTop: 40
    },
    ImageBack:
    {
     
      width: '100%',
      height: '100%'
    },
    Button:
    {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: '#4267B2',
      alignSelf: 'center',
     // textAlign: 'centre',
      height: 45,
      width: 200,
      marginTop: 70,
     
      borderWidth: 1,
      
      borderColor: '#4267B2'
    }
  
  });