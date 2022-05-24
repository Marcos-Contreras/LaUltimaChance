import React, { useState, useEffect } from "react";
import { Stack, Image, Box, Text, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import GlobalStyle from '../resources/GlobalStyle';
import { TouchableOpacity } from 'react-native';
import { auth } from "../database/firebase";
// import { useNavigation } from "@react-navigation/core";

const Login = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

//MANDA AUTOMATICAMENTE AL USUARIO AL HOME DE LA APP CUANDO SE HA INICIADO SESIÓN
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(user =>{
      if(user){
        navigation.replace("RootClientTabs")
      }
    })
    return unsuscribe
  }, [])
  

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with: ', user.email);
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
              Inicia sesión
            </Text>
            <Text style={GlobalStyle.smallLabelText}>
                Ingresa para continuar
            </Text>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>EMAIL</FormControl.Label>
                  <Input value = {email} onChangeText = {text=> setEmail(text)} size="xl"/>
                </FormControl>
              <FormControl>
                <FormControl.Label>CONTRASEÑA</FormControl.Label> 
                  <Input value = {password} onChangeText = {text=> setPassword(text)} type="password" size="xl"/>
                    <Link _text={{
                      fontSize: "xs",
                      fontWeight: "500",
                      color: "#007AC1"
                    }} alignSelf="flex-end" mt="1" onPress={() => navigation.navigate('ForgotPassword')}>
                        ¿Olvidaste tu contraseña?
                    </Link>
              </FormControl>
              <TouchableOpacity onPress={handleLogin} style={GlobalStyle.largeButton}>
                <Text style={GlobalStyle.largeButtonText}>Iniciar sesión</Text>
              </TouchableOpacity>
              <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }}>
                    Soy un nuevo usuario.{" "}
                </Text>
                <Link _text={{
                  color: "#007AC1",
                  fontWeight: "medium",
                  fontSize: "sm"
                }} onPress={() => navigation.navigate('SignUp')}>
                    Registrarme
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
    
    );
}

export default Login;