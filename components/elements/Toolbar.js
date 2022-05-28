import React from "react";
import { Menu, HamburgerIcon, Box, Pressable, Center, NativeBaseProvider } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../database/firebase';


const Toolbar = () => {
    const navigation = useNavigation();
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
            <Box w="90%" alignItems="center">
            <Menu w="190" defaultIsOpen={false} trigger={triggerProps => {
            return  <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                        <HamburgerIcon style={{ color: 'white', margin: 15 }}/>
                    </Pressable>;
            }}>
                <Menu.Item onPress={() => navigation.navigate('Accounts')}>Mi cuenta</Menu.Item>
                <Menu.Item onPress={() => navigation.navigate('AccountStack', { screen: 'Settings' })}>Configuración</Menu.Item>
                <Menu.Item onPress={handleSignOut}>Cerrar sesión</Menu.Item>
            </Menu>
            </Box>
    </NativeBaseProvider>
    );
}

export default Toolbar;