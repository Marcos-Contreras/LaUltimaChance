import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Text, Button, Box, Image, Heading } from 'native-base';

function Thanks ({ navigation }) {
    return (
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" >
          
          
          <Image mt="100" source={
      require( "../assets/luc.png")
    }  width={300}  
       height={330}
       
    />
        
        <Heading> Gracias por su compra</Heading> 
        <Text> Número de compra: 40005</Text> 
        <Text>{"\n"}</Text>
        <Button backgroundColor={"#002171"} width={200} onPress={() => navigation.navigate('Home')} >Continuar comprando</Button>
        </Box>
      </NativeBaseProvider>
    );
  }


export default Thanks;