import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, VStack, Text, Box, Image, Divider } from 'native-base';

function Contact({navigation}){
    return (
        <NativeBaseProvider>
            <VStack space={1} alignItems="center">
                <Text bold italic fontSize="4xl">Redes Sociales</Text> 
            </VStack>

            <Box alignItems="center" marginTop="30">
                <Box>
                    <TouchableOpacity
                            //onPress={}
                        >
                        <View>
                            <Image source={{
                                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
                                }} alt="Alternate Text" size="xl" />
                            <Text align="center">/LaUltimaChanceAGS</Text>
                        </View>
                    </TouchableOpacity>
                </Box>
                <Box marginTop="30">
                    <TouchableOpacity
                                //onPress={}
                        >
                        <View>
                            <Image source={{
                                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"
                                }} alt="Alternate Text" size="xl" />
                            <Text align="center">@LaUltimaChanceAGS</Text>
                        </View>
                    </TouchableOpacity>
                </Box>
            </Box>
        </NativeBaseProvider>
    );
}

export default Contact;