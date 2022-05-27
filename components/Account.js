import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Text, Center, Box } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import GlobalStyle from '../resources/GlobalStyle';
import { auth } from '../database/firebase';


function Account ({ navigation }) {

    //PARA CERRAR SESIÓN
    const handleSignOut = () => {
      auth.signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
    }

    return (
      <NativeBaseProvider>
        <Center w="100%" >
        <Box safeArea p="2" py="8" w="90%" maxW="390" >
        <Text style={GlobalStyle.largeLabelText}>
              ACCOUNT
            </Text>
        
          <TouchableOpacity onPress={() => navigation.navigate('PayPalLogin')} style = {styles.button}>
            <Text style = {{ color: '#fff', fontSize: 20, fontWeight:'bold'}}  >PayPal</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style = {styles.button}>
            <Text style = {{ color: '#fff', fontSize: 20, fontWeight:'bold'}}  >Recover password</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style = {styles.button}>
            <Text style = {{ color: '#fff', fontSize: 20, fontWeight:'bold'}}  >Configuration</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignOut} style = {styles.button}>
            <Text style = {{ color: '#fff', fontSize: 20, fontWeight:'bold'}}  >Log out</Text>
          </TouchableOpacity>
          

        </Box>
        </Center>
      </NativeBaseProvider>
    );
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#4182B0",
      paddingHorizontal: 16,
      borderRadius: 20,
      paddingVertical: 20,
      width: "100%",
      marginVertical: 10,
      alignItems: "baseline"
    }
    
  })
 

export default Account;