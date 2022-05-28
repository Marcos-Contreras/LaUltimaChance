import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, VStack, Text, Box, Divider } from 'native-base';

function Settings({navigation}){
    return (
        <NativeBaseProvider>
            <VStack space={1} alignItems="center">
                <Text bold fontSize="4xl">Configuration</Text> 
            </VStack>
            <Box alignItems="center" marginTop="30">
                <Text mb="2" bold fontSize="lg">Change language</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    //onPress={}
                >
                    <Text style={styles.textButtonStyle}>Spanish</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    //onPress={}
                >
                    <Text style={styles.textButtonStyle}>English</Text>
                </TouchableOpacity>
                <Divider />
            </Box>
            <Box alignItems="center" justifyContent="center">
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('Terms')}
                >
                    <Text style={styles.textButtonStyle}>Terms and About</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('Contact')}
                >
                    <Text style={styles.textButtonStyle}>Contact</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('Rate')}
                >
                    <Text style={styles.textButtonStyle}>Rate us</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonLocateStyle}
                    onPress={() => navigation.navigate('Locate')}
                >
                    <Text style={styles.textButtonStyle}>Locate us</Text>
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
        backgroundColor: '#4182B0'
        },
        textButtonStyle: {
      fontSize: 19,
      color: 'white'
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