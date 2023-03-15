import React from 'react';
import { Text, TextInput, View, Button, StatusBar } from 'react-native';
import { NodePlayerView } from 'react-native-nodemediaclient';

class Viewers extends React.Component {
  static navigationOptions = {
    title: 'Play',
  };

  render() {
    console.log( this.props)
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <NodePlayerView
          style={{ flex: 1, backgroundColor: '#333' }}
          ref={(vp) => { this.vp = vp }}
          inputUrl= "192.168.29.94:1935/live"
          scaleMode={"ScaleAspectFill"}
          bufferTime={300}
          maxBufferTime={1000}
          autoplay={true}
          onStatus={(code, msg) => {
            console.log("onStatus=" + code + " msg=" + msg);
          }}
        />
      </View>
    );
  }

  componentWillUnmount() {
    this.vp.stop();
  }
}

export default Viewers;