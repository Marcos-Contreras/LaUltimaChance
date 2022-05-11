import * as React from "react";
import { useToast, Image, Box, Text, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import GlobalStyle from '../resources/GlobalStyle';
import { TouchableOpacity } from 'react-native';

const ForgotPassword = ({navigation}) => {
  return (
  
      <NativeBaseProvider>
        <Center w="100%" bg="#fff">
          <Box safeArea p="2" py="8" w="90%" maxW="390">
          <Image source={
                require('../assets/Logo.png')
            } alt="Alternate Text" size="xl" style={GlobalStyle.logo}/>
            <Text style={GlobalStyle.largeLabelText}>
              ¿Olvidaste tu contraseña?
            </Text>
            <Text style={GlobalStyle.smallLabelText}>
                Ingresa tu email y se te enviará un correo con las instrucciones para cambiar tu contraseña
            </Text>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>EMAIL</FormControl.Label>
                  <Input size="xl"/>
                </FormControl>
              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={GlobalStyle.largeButton}>
                <Text style={GlobalStyle.largeButtonText}>Enviar correo</Text>
              </TouchableOpacity>
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
    
    );
}

export default ForgotPassword;