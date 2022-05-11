import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { Button, Box, Heading, Text, Center,  NativeBaseProvider, Divider, Stack } from 'native-base';
import { TouchableOpacity } from "react-native";
import GlobalStyle from '../resources/GlobalStyle';

function Card ({ navigation }) {
    return (
        <NativeBaseProvider >
        <Box safeArea p="2" py="8" w="90%" maxW="390">
        <Text style={GlobalStyle.largeLabelText}>
              CARRITO
            </Text>
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
          
          
          <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Checkout')} style={GlobalStyle.largeButton}>
              <Text style={GlobalStyle.largeButtonText}> Comprar ahora </Text>
          </TouchableOpacity>

          
          <Button width={180} backgroundColor={"#D60004"}  >
            <Text style={GlobalStyle.largeButtonText}>Eliminar productos</Text></Button>

          
        <Heading paddingTop={"8"}>Total: 78$</Heading>
        </Center>
      </Box>
      </NativeBaseProvider>
    );
  }


export default Card;