import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


  
  
  
const HomeScreen = () => {
  const [streamerName, setStreamerName] = useState('');
  const navigation = useNavigation();
    
  const handleJoinPress = () => {
    console.log(`Joining ${streamerName} stream...`);
    navigation.navigate('Viewers', { "streamerName": streamerName, });
    
    // navigation.navigate('Profile', { userId: 2 });

  };

  const handleStreamPress = () => {
    console.log(`Streaming as ${streamerName}...`);
    // Add your logic for Stream button press
    navigation.navigate('Streamer', { "streamerName": streamerName, });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RTMP Stream</Text>
      <TextInput
        style={styles.input}
        onChangeText={setStreamerName}
        value={streamerName}
        placeholder="Streamer Name"
        placeholderTextColor="#000" 
        
      />
      <TouchableOpacity style={styles.button} onPress={handleJoinPress}>
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleStreamPress}>
        <Text style={styles.buttonText}>Stream</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
