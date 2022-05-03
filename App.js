import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import Card from './components/Card';
import Terms from './components/Terms'
import Thanks from './components/Thanks'
import Checkout from './components/Checkout'
import Account from './components/Account'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Card" component={Card} /> 
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Thanks" component={Thanks} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

