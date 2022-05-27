import React, { useState, useEffect } from "react";
import { Box, VStack, FormControl, Text, Input, Center, NativeBaseProvider, Image } from "native-base";
import GlobalStyle from '../resources/GlobalStyle';
import { TouchableOpacity } from 'react-native';
import { auth } from "../database/firebase";

const SignUp = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //MANDA AUTOMATICAMENTE AL USUARIO AL HOME DE LA APP CUANDO SE HA INICIADO SESIÓN
    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user =>{
          if(user){
            navigation.navigate("RootClientTabs")
          }
        })
        return unsuscribe
      }, [])

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with: ', user.email);
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
                    <VStack space={3} mt="5">
                        <Text style={GlobalStyle.largeLabelText}>
                            Register
                        </Text>
                        <Text style={GlobalStyle.smallLabelText}>
                            Register to continue
                        </Text>
                        <FormControl>
                            <FormControl.Label>EMAIL</FormControl.Label>
                            <Input size="xl" value = {email} onChangeText = {text=> setEmail(text)}/>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>PASSWORD</FormControl.Label>
                            <Input value = {password} onChangeText = {text=> setPassword(text)} type="password"/>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>CONFIRM PASSWORD</FormControl.Label>
                                <Input type="password" size="xl"/>
                            </FormControl>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('RootClientTabs')} style={GlobalStyle.largeButton}> */}
                        <TouchableOpacity onPress={handleSignUp} style={GlobalStyle.largeButton}>
                            <Text style={GlobalStyle.largeButtonText}>REGISTER</Text>
                        </TouchableOpacity>
                    </VStack>
                </Box>
            </Center>
        </NativeBaseProvider>
    
    );
}

export default SignUp;