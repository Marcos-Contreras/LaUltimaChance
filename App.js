import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Categories from './components/Categories';
import Snack from './components/Snack';
import DairyProducts from './components/DairyProducts';
import Beverages from './components/Beverages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Snack" component={Snack} />
        <Stack.Screen name="DairyProducts" component={DairyProducts} />
        <Stack.Screen name="Beverages" component={Beverages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

