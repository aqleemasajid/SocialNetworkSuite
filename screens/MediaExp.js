import React from 'react';
import { Button, View, Text } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as firebase from 'firebase';

export default class App extends React.Component {
  
  componentDidMount()
  {
    var firebaseConfig = {
      apiKey: "AIzaSyCx_SfDTEr2hTBC_BBgPq8XUqBwCdDyZLU",
      authDomain: "circle-989b3.firebaseapp.com",
      databaseURL: "https://circle-989b3.firebaseio.com",
      projectId: "circle-989b3",
      storageBucket: "circle-989b3.appspot.com",
      messagingSenderId: "599994717606",
      appId: "1:599994717606:web:036a070f2f056b19692b67",
      measurementId: "G-255MQKSV4L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
  }
  handleSignUp=()=>{
    this.uploadImage("../assets/images/selena.jpg", "Test")
    .then(()=>{
      alert("Success");
    })
    .catch((error)=>{
      alert(error);
    })
  }
  uploadImage= async(uri,imageN)=>{
    
    const blob= await new Promise((resolve,reject)=>{
      const xhr=new XMLHttpRequest();
      xhr.onload=function(){
        resolve(xhr.response);
      };
      xhr.onerror=function() {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType='blob';
      xhr.open('GET',uri,true);
      xhr.send(null);
    });
    var ref= firebase.storage().ref().child("images/" + imageN);
    return ref.put(blob);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          onPress={this.handleSignUp}
          title="Do MediaLibrary Stuff"
        />
      </View>
    );
  }
}
