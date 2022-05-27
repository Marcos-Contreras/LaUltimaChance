import * as React from 'react';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Box, FormControl, Input, Center, Stack, Divider, Image } from 'native-base';

function PayPalAccount ({ navigation }) {
    return (
        <NativeBaseProvider>
            <Stack space={2} alignSelf="center" px="4" safeArea mt="4" w={{
            base: "100%",
            md: "25%"
            }}>
            <Center w="100%">
            <Box p="4" py="5" w="100%" maxW="300">
            <Image source={{
                uri: "https://1000marcas.net/wp-content/uploads/2019/12/logo-Paypal-500x281.png"
                }} alt="Alternate Text" size="2xl" resizeMode={"contain"}/>
            </Box>
            <Box>
                <FormControl isDisabled mb="5">
                    <FormControl.Label _disabled={{
                    _text: {
                    fontWeight: "bold"
                    }
                }}>
                    USER NAME
                    </FormControl.Label>
                    <Input placeholder="Example name" />
                </FormControl>
                <Divider />
            </Box>
            <Box>
                <FormControl isDisabled mb="5">
                    <FormControl.Label _disabled={{
                    _text: {
                    fontWeight: "bold"
                    }
                }}>
                    EMAIL
                    </FormControl.Label>
                    <Input placeholder="user@example.com" />
                </FormControl>
                <Divider />
            </Box>
            <Box>
                <FormControl isDisabled mb="5">
                    <FormControl.Label _disabled={{
                    _text: {
                    fontWeight: "bold"
                    }
                }}>
                    BANK ACCOUNT NO.
                    </FormControl.Label>
                    <Input placeholder="2459 *** *** *** ***" />
                </FormControl>
                <Divider />
            </Box>
            </Center>
            </Stack>
        </NativeBaseProvider> 
    );
}

export default PayPalAccount;