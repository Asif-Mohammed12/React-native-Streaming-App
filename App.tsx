import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './src/Screens/Home';
import HomeScreen from './src/Screens/HomeScreen';
import Viewers from './src/Screens/Viewer';
import Streamer from './src/Screens/Streamer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RNStream" component={HomeScreen} />
        <Stack.Screen name="Viewers" component={Viewers} />                                                                     
        <Stack.Screen name="Streamer" component={Streamer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;