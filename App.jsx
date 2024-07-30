import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignUpScreen from './src/screen/SignUpScreen';
const App = () => {
  return (
    <NavigationContainer>
      //header aarha tha usko hatane ke lie yh screen option wala code
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"LOGIN"} component={LoginScreen} />
      <Stack.Screen name={"SignUp"} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})