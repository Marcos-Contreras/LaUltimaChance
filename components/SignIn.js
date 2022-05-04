import * as React from "react";
import { Stack, Image, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import GlobalStyle from '../resources/GlobalStyle';

const SignIn = ({navigation}) => {
    return (
        <NativeBaseProvider>
            <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
                <Image source={
                    require('../assets/Logo.png')
                } alt="Alternate Text" size="xl" style={GlobalStyle.logo}/>
                
            </Box>
            
        </NativeBaseProvider>
    
    );
}

export default SignIn;