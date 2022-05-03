import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { Button, Box, Heading,  Text, Center,  NativeBaseProvider, Divider, Stack } from 'native-base';

function Card ({ navigation }) {
    return (
        <NativeBaseProvider >
        <Box flex={1} bg="#fff">
          <Heading paddingTop={"10"} paddingLeft={"10"}>Churrumais</Heading>
          <Text paddingLeft={"10"}>Precio: 20$</Text>
          <Divider width={"90%"} my="4" thickness="5" mx="5" />
          <Heading paddingLeft={"10"}>Coca-Cola</Heading>
          <Text paddingLeft={"10"}>Precio: 25$</Text>
          <Divider width={"90%"} my="4" thickness="5" mx="5"/>
          <Heading paddingLeft={"10"}>Danonino</Heading>
          <Text paddingLeft={"10"}>Precio: 33$</Text>
          <Divider width={"90%"} my="4" thickness="5" mx="5" />
          <Center>
          <Stack direction="row" mb="2.5" mt="1.5" space={2}>
          
          <Button width={180} backgroundColor={"#002171"} onPress={() => navigation.navigate('Checkout')} >
            Comprar ahora </Button>
          
          <Button width={180} backgroundColor={"#D60004"}  >
            Eliminar</Button>
          </Stack>
          
        <Heading paddingTop={"8"}>Total: 78$</Heading>
        </Center>
      </Box>
      </NativeBaseProvider>
    );
  }


export default Card;