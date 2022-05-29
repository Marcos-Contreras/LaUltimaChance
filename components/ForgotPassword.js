import * as React from "react";
import { useToast, Image, Box, Text, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import GlobalStyle from '../resources/GlobalStyle';
import { TouchableOpacity } from 'react-native';
import { auth } from '../database/firebase';

const ForgotPassword = ({navigation}) => {

  //PARA CERRAR SESIÓN
  const handleSignOut = () => {
    auth.signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }

  return (
      <NativeBaseProvider>
        <Center w="100%" bg="#fff">
          <Box safeArea p="2" py="8" w="90%" maxW="390">
          <Image source={
                require('../assets/Logo.png')
            } alt="Alternate Text" size="xl" style={GlobalStyle.logo}/>
            <Text style={GlobalStyle.largeLabelText}>
              Have you forgot your password?
            </Text>
            <Text style={GlobalStyle.smallLabelText}>
                Type your email and we will send you a message with instructions to change it
            </Text>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>EMAIL</FormControl.Label>
                  <Input size="xl"/>
                </FormControl>
              <TouchableOpacity onPress={handleSignOut} style={GlobalStyle.largeButton}>
                <Text style={GlobalStyle.largeButtonText}>SEND EMAIL</Text>
              </TouchableOpacity>
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
    
    );
}

export default ForgotPassword;