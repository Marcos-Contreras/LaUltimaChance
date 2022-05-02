import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, VStack, Text, Box, Divider } from 'native-base';

function Settings({navigation}){
    return (
        <NativeBaseProvider>
            <VStack space={1} alignItems="center">
                <Text bold italic fontSize="4xl">Configuración</Text> 
            </VStack>
            <Box alignItems="center" marginTop="30">
                <Text mb="2" bold fontSize="lg">Cambiar idioma</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    //onPress={}
                >
                    <Text style={styles.textButtonStyle}>Español</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    //onPress={}
                >
                    <Text style={styles.textButtonStyle}>Inglés</Text>
                </TouchableOpacity>
                <Divider />
            </Box>
            <Box alignItems="center" justifyContent="center">
                <TouchableOpacity
                    style={styles.buttonStyle}
                    //onPress={}
                >
                    <Text style={styles.textButtonStyle}>Términos y Sobre la App</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    //onPress={}
                >
                    <Text style={styles.textButtonStyle}>Contacto</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    //onPress={}
                >
                    <Text style={styles.textButtonStyle}>Evaluar App</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonLocateStyle}
                    //onPress={}
                >
                    <Text style={styles.textButtonStyle}>Ubícanos</Text>
                </TouchableOpacity>
            </Box>
        </NativeBaseProvider>
    );
}

    const styles = StyleSheet.create({
        buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40,
        marginTop: 5,
        marginBottom:5,
        padding: 10,
        backgroundColor: 'lightblue'
        },
        textButtonStyle: {
      fontSize: 16,
      fontFamily: "Bahnschrift SemiBold"
    },
    buttonLocateStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        marginTop: 15,
        marginBottom:5,
        padding: 10,
        backgroundColor: 'orange'
        }
    });

export default Settings;