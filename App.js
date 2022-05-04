import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Card from './components/Card';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import RootClientTabs from './components/navigation/ClientTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogOrSign">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* PANTALLAS DE BOTTOM NAVIGATION */}
        <Stack.Screen name="RootClientTabs" component={RootClientTabs} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

