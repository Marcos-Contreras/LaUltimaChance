import * as React from 'react';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Button, Box, Link, FormControl, Heading, VStack, Input, Center, Image } from 'native-base';

function PayPalLogin ({ navigation }) {
    return (
        <NativeBaseProvider>
            <Center w="100%">
            <Box safeArea p="1" py="5" w="100%" maxW="300">
            <Image source={{
                uri: "https://1000marcas.net/wp-content/uploads/2019/12/logo-Paypal-500x281.png"
                }} alt="Alternate Text" size="2xl" resizeMode={"contain"}/>
            <Heading mt="1" _dark={{
            color: "black"
            }} fontWeight="medium" size="xs">
                Inicie Sesión con PayPal
            </Heading>
    
            <VStack space={3} mt="2">
                <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input />
                </FormControl>
                <FormControl>
                <FormControl.Label>Contraseña</FormControl.Label>
                <Input type="password" />
                </FormControl>
                <Button mt="2" colorScheme="blue" onPress={() => navigation.navigate('PayPalAccount')}>
                Iniciar Sesión
                </Button>
            </VStack>
            </Box>
        </Center>
      </NativeBaseProvider>
    );
  }

export default PayPalLogin;