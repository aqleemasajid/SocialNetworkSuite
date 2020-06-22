
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ImageBackground
} from 'react-native';
export default class Notifications extends React.Component {


  imageDetector()
  {
    // Replace <Subscription Key> with your valid subscription key.
    var subscriptionKey = "8fc7a11ff93843e1a9202bd772711dec";
    
    var uriBase =
        "https://myfaceapi123.cognitiveservices.azure.com/face/v1.0/detect";

    // Request parameters.
    var params = {
        "returnFaceId": "true",
        "returnFaceLandmarks": "false",
        "returnFaceAttributes":
            "age,gender,headPose,smile,facialHair,glasses,emotion," +
            "hair,makeup,occlusion,accessories,blur,exposure,noise"
    };

    // Display the image.
    var sourceImageUrl ="https://upload.wikimedia.org/wikipedia/commons/c/c3/RH_Louise_Lillian_Gish.jpg";
    var data= '{"url": ' + '"' + sourceImageUrl + '"}';
    // Perform the REST API call.
    return fetch(uriBase + "?" + params ,{ 

      method: "POST",
      headers:
      {
        "Accept" : "application/json",
        "Content-Type":"application/json",
        "Ocp-Apim-Subscription-Key": subscriptionKey
      },

      body: alert(data)

        

      
      
    }).then((response)=> response.json())
    .then((responseJson)=> alert(JSON.stringify( responseJson)))
    .catch((error)=> alert(error))




  }
  
  render()
  {
  return (
    <View style={styles.container}>
     
      <ImageBackground style={styles.ImageBack}
          source={require('../assets/images/Theme.jpg')}
        >
     <View style={styles.header}>
        <Text style={styles.text}> Notifications</Text>
      </View>
     
     <Button onPress={this.imageDetector.bind(this)} title="Click here" /> 
      </ImageBackground>
    </View>
  );
  }
}



const styles = StyleSheet.create({
  container: {
    
    flex: 1
  },
  header:
  {
    height: 50,
    
    
    
    backgroundColor: 'black'
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
 
  
  ImageBack:
  {
   
    width: '100%',
    height: '100%'
  },
  

});


