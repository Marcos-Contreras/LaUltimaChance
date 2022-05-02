import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import Card from './components/Card';
import Offers from './components/Offers';
import DOffers from './components/DOffers';
import Novelty from './components/Novelty';
import DNovelty from './components/DNovelty';
import Packages from './components/Packages';
import DPackages from './components/DPackages';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="DOffers" component={DOffers} />
        <Stack.Screen name="Novelty" component={Novelty} />
        <Stack.Screen name="DNovelty" component={DNovelty} />
        <Stack.Screen name="Packages" component={Packages} />
        <Stack.Screen name="DPackages" component={DPackages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

