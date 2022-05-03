import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Text, Button, Box } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';



function Account ({ navigation }) {
    return (
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" >
        <Text>{"\n"}</Text>
        
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style = {styles.button}>
            <Text style = {{ color: '#fff', fontSize: 22, fontWeight:'bold'}}  >PayPal</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Home')} style = {styles.button}>
            <Text style = {{ color: '#fff', fontSize: 22, fontWeight:'bold'}}  >Recuperar o cambiar contraseña</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style = {styles.button}>
            <Text style = {{ color: '#fff', fontSize: 22, fontWeight:'bold'}}  >Cerrar sesión</Text>
          </TouchableOpacity>

        </Box>
      </NativeBaseProvider>
    );
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#03A9F4",
      paddingHorizontal: 16,
      borderRadius: 20,
      paddingVertical: 20,
      width: "90%",
      marginVertical: 5,
      alignItems: "baseline"
    }
    
  })
 

export default Account;