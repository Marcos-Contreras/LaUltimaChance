import * as React from "react";
import { Box, VStack, FormControl, Text, Input, Center, NativeBaseProvider, Image } from "native-base";
import GlobalStyle from '../resources/GlobalStyle';
import { TouchableOpacity } from 'react-native';

const SignUp = ({navigation}) => {
    return (
        <NativeBaseProvider>
            <Center w="100%" bg="#fff">
                <Box safeArea p="2" py="8" w="90%" maxW="390">
                    <Image source={
                    require('../assets/Logo.png')
                    } alt="Alternate Text" size="xl" style={GlobalStyle.logo}/>
                    <VStack space={3} mt="5">
                        <Text style={GlobalStyle.largeLabelText}>
                            Regístrate
                        </Text>
                        <Text style={GlobalStyle.smallLabelText}>
                            Registrate como usuario para continuar
                        </Text>
                        <FormControl>
                            <FormControl.Label>EMAIL</FormControl.Label>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>CONTRASEÑA</FormControl.Label>
                            <Input type="password" />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>CONFIRMAR CONTRASEÑA</FormControl.Label>
                                <Input type="password" />
                            </FormControl>
                        <TouchableOpacity onPress={() => navigation.navigate('RootClientTabs')} style={GlobalStyle.largeButton}>
                            <Text style={GlobalStyle.largeButtonText}>Registrarme</Text>
                        </TouchableOpacity>
                    </VStack>
                </Box>
            </Center>
        </NativeBaseProvider>
    
    );
}

export default SignUp;