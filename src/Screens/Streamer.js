import React from 'react';
import { Text, TextInput, View, Button, StatusBar } from 'react-native';
// import { NodePlayerView } from 'react-native-nodemediaclient';
import { NodeCameraView } from 'react-native-nodemediaclient';
import { PermissionsAndroid } from 'react-native';


const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  class Streamer extends React.Component {
    constructor() {
      super();
      this.state = { publishBtnTitle: 'Start Publish' };
    }
    
    render() {
      return (
        
        <View style={{ flex: 1, backgroundColor: '#333' }}>
        {/* <Text style={{color:'#000'}}>Streamer Name {this.props.route.params.streamerName}</Text>

          <NodeCameraView
            style={{ flex: 1, backgroundColor: '#333' }}
            ref={(vb) => { this.vb = vb }}
            outputUrl={`rtmp://192.168.29.94:1935/live/${this.props.route.params.streamerName}`}
            camera={{ cameraId: 1, cameraFrontMirror: true }}
            audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
            // video={{ preset: 12, bitrate: 400000, profile: 1, fps: 30, videoFrontMirror: false }}
            video={{ preset: 1, bitrate: 500000, profile: 1, fps: 15, videoFrontMirror: false }}
            autopreview={true}
            onStatus={(code, msg) => {
            console.log("onStatus=" + code + " msg=" + msg);
          }}
          /> */}
        <Button title="request permissions" onPress={requestCameraPermission} />
           <Button
            onPress={() => {
              if (this.state.isPublish) {
                this.setState({ publishBtnTitle: 'Start Publish', isPublish: false });
                this.vb.stop();
              } else {
                this.setState({ publishBtnTitle: 'Stop Publish', isPublish: true });
                this.vb.start();
              }
            }}
            title={this.state.publishBtnTitle}
            color="#841584"
          />
        </View>
      );
    }

  componentWillUnmount() {
    this.vb.stop();
  }
  }

  

  export default Streamer;