import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Text, Button, Box, Image, Heading } from 'native-base';
import GlobalStyle from '../resources/GlobalStyle';

function Thanks ({ navigation }) {
    return (
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" >
          
          
          <Image mt="100" source={
      require( "../assets/Logo.png")
    }  style={GlobalStyle.logo}
       
    />
        
        <Heading> Thanks for your purchase</Heading> 
        <Text> Purchase number: 40005</Text> 
        <Text>{"\n"}</Text>
        <Button backgroundColor={"#002171"} width={200} onPress={() => navigation.navigate('Home')} >CONTINUE BUYING</Button>
        </Box>
      </NativeBaseProvider>
    );
  }


export default Thanks;