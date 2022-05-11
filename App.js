import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import RootClientTabs from './components/navigation/ClientTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#002171' },
              }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        {/* PANTALLAS DE BOTTOM NAVIGATION */}
        <Stack.Screen name="RootClientTabs" component={RootClientTabs} options = {{ headerShown: false }}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

