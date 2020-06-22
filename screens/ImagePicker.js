import React, { Component } from 'react';
import {  Image, ScrollView, StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import CameraRoll from '@react-native-community/cameraroll';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
export default class App extends Component {
  state = { photos: null };

  render() {
    let { photos } = this.state;
    return (
      
      <View style={{flex: 1, height: 50, marginTop: 30, height: 30}}> 
       <TouchableOpacity onPress={this.alertIfRemoteNotificationsDisabledAsync}>
         <View> 
           <Text> hi</Text>
         </View>
       </TouchableOpacity>
      </View>
      // <ScrollView style={styles.container}>
        
      //  {this.alertIfRemoteNotificationsDisabledAsync()} 
        
      // </ScrollView>
      
    );
  }

  //  _renderPhotos(photos) {
  //   this.alertIfRemoteNotificationsDisabledAsync();
  //   let images = [];
  //   for (let { node: photo } of photos.edges) {
  //     images.push(
  //       <Image
  //         source={photo.image}
  //         resizeMode="contain"
  //         style={{ height: 100, width: 100, resizeMode: 'contain' }}
  //       />
  //     );
  //   }
  //   return images;
  // }

  // componentDidMount() {
  //   this._getPhotosAsync().catch(error => {
  //     console.error(error);
  //   });
  // }

  //  _getPhotosAsync() {
  //   let photos =  CameraRoll.getPhotos({ first: 5 }).then(photos=>{
  //     this.setState({"photo":photo})
  //   });
   
  // } 


   async alertIfRemoteNotificationsDisabledAsync(photos) {
    alert("heeeeeeeeeeeyyyyy");
    Console.log( await Permissions.askAsync(Permissions.CAMERA_ROLL));
    
   
    
    //this.setState({ permissionsGranted: status === 'granted' }, this.getAlbums);

    // if permissions granted
   // let album =  MediaLibrary.getAlbumAsync('Camera');
    //let photo = MediaLibrary.getAssetsAsync({album: 'Camera'});
    
  
  
   //  console.log("albumsReponse=", album);
     //console.log("Awein=");
     //console.log(photo);
   
  }
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
