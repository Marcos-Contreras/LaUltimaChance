import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Text, Box, Center, Image } from 'native-base';
//IMPORTANDO ESTILOS
import GlobalStyle from '../resources/GlobalStyle';

function Welcome ({ navigation }) {
    return (
      <NativeBaseProvider>
        
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
            <Image source={
                require('../assets/Logo.png')
            } alt="Alternate Text" size="xl" style={GlobalStyle.logo}/>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={GlobalStyle.largeButton}>
                <Text style={GlobalStyle.largeButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={GlobalStyle.largeButton}>
                <Text style={GlobalStyle.largeButtonText}>Registrarse</Text>
            </TouchableOpacity>
        </Box>
        
      </NativeBaseProvider>
    );
  }


export default Welcome;