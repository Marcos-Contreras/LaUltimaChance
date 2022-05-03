import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Text, Button, Box, Image } from 'native-base';

function Home ({ navigation }) {
    return (
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Pantalla de inicio</Text>
          <Button onPress={() => navigation.navigate('Thanks')}>Gracias</Button>
          <Text>{"\n"}</Text>
          <Button onPress={() => navigation.navigate('Account')}>Cuenta</Button>
          <Text>{"\n"}</Text>
          <Button onPress={() => navigation.navigate('Terms')}>Terminos</Button>
          <Text>{"\n"}</Text>
          <Button onPress={() => navigation.navigate('Card')}>Carrito</Button>
          <Text>{"\n"}</Text>
          <Button onPress={() => navigation.navigate('Checkout')}>Checkout</Button>

        </Box>
      </NativeBaseProvider>
    );
  }


export default Home;