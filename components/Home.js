import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Text, Button, Box } from 'native-base';

function Home ({ navigation }) {
    return (
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>PANTALLA DE INICIO PRUEBA DE GIT HUB AHORA SI ES EL BUENO</Text>
          <Button onPress={() => navigation.navigate('Login')}>Ir a Login</Button>
          <Button onPress={() => navigation.navigate('Offers')}>Ir a Offers</Button>
          <Button onPress={() => navigation.navigate('Novelty')}>Ir a Novelty</Button>
          <Button onPress={() => navigation.navigate('Packages')}>Ir a Packages</Button>

        </Box>
      </NativeBaseProvider>
    );
  }


export default Home;