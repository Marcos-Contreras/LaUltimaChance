import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Text, Button, Box } from 'native-base';

function Login ({ navigation }) {
    return (
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Login</Text>
          <Button onPress={() => navigation.navigate('Card')}>Go to the card</Button>
        </Box>
      </NativeBaseProvider>
    );
  }


export default Login;