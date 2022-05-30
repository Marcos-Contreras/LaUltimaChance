import * as React from 'react';
import { TouchableOpacity } from 'react-native';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Text, Button, Box, Link, FormControl, Heading, VStack, Input, Center, Image } from 'native-base';
import GlobalStyle from '../resources/GlobalStyle';

function PayPalLogin ({ navigation }) {
    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea p="1" py="5" w="100%" maxW="300">
            <Image source={{
                uri: "https://1000marcas.net/wp-content/uploads/2019/12/logo-Paypal-500x281.png"
                }} alt="Alternate Text" size="2xl" resizeMode={"contain"}/>
            <Heading style={GlobalStyle.largeLabelText}>
                Log in with PayPal
            </Heading>
    
            <VStack space={3} mt="2">
                <FormControl>
                <FormControl.Label>EMAIL</FormControl.Label>
                <Input size="xl"/>
                </FormControl>
                <FormControl>
                <FormControl.Label>PASSWORD</FormControl.Label>
                <Input type="password" size="xl"/>
                </FormControl>
                <TouchableOpacity style={GlobalStyle.largeButton} onPress={() => navigation.navigate('PayPalAccount')}>
                    <Text style={GlobalStyle.largeButtonText}>LOG IN</Text>
                </TouchableOpacity>
            </VStack>
            </Box>
        </Center>
      </NativeBaseProvider>
    );
  }

export default PayPalLogin;