import * as React from 'react';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, VStack, Text, Box, Divider, Image } from 'native-base';
function Locate() {
    return (
      <NativeBaseProvider>
      <Box p="4" py="5" w="100%" maxW="300" alignItems='center'>
      <VStack space={1} alignItems="center">
                <Text bold italic fontSize="3xl">Nuestra Ubicación</Text> 
            </VStack>
        <Image shadow={2} source={{
          uri: 'https://s3.amazonaws.com/ciudad.mapasdemexico.com.mx/mapa-aguascalientes-aguascalientes.jpg'
          }} alt="Alternate Text" size="2xl" resizeMode={"contain"}/>
      </Box>
      </NativeBaseProvider>
  );
  }

  export default Locate;