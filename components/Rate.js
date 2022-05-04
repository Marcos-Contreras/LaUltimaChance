import React, {useState} from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, VStack, Text, Box, Stack, TextArea } from 'native-base';

    const Rate = () => {
        const [defaultRating, setdefaultRating] = useState(0);
        const [maxRating, setmaxRating] = useState([1,2,3,4,5]);

        const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
        const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

        const CustomRatingBar = () => {
            return (
                <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return(
                            <TouchableOpacity activeOpacity={0.7}
                            key={item}
                            onPress={() => setdefaultRating(item)}>
                                <Image style={styles.starImgStyle}
                                    source={
                                        item <=defaultRating
                                        ? {uri:starImgFilled}
                                        :{uri: starImgCorner}
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })    
                }
                </View>
            )
        }
        return (
            <NativeBaseProvider>
                <VStack space={1} alignItems="center">
                    <Text bold italic fontSize="4xl">Calificanos</Text> 
                </VStack>
            
                <Box alignItems="center" w="100%">
                    <CustomRatingBar/>
                    <Text>
                        {defaultRating + ' / ' + maxRating.length}
                    </Text>
                </Box>

                <Box alignItems="center" w="100%" marginTop="30">
                    <Stack space={2} w="100%" maxW="300">
                    <Box>
                        <Text mb="4" bold fontSize="lg">
                            Dejanos tu opinión o comentarios:
                        </Text>
                        <TextArea h={20} style={styles.textAreaStyle} placeholder="Yo pienso que..." w="100%" maxW="300" />
                    </Box>
                    </Stack>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttonStyle}
                        onPress={() => alert(defaultRating)}>
                        <Text
                        style={styles.textButtonStyle}>
                            Enviar Calificación
                        </Text>
                    </TouchableOpacity>
                </Box>
            </NativeBaseProvider>
        );
    }

const styles = StyleSheet.create({

    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 15,
        backgroundColor: 'lightblue'
    },
    textButtonStyle: {
      fontSize: 16
    },
    textAreaStyle: {
      fontSize: 14
    }

});

export default Rate;