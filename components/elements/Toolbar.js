import React from "react";
import { Menu, HamburgerIcon, Box, Pressable, Center, NativeBaseProvider } from "native-base";

const Toolbar = ({navigation}) => {
    return (
        <NativeBaseProvider>
            <Box w="90%" alignItems="center">
            <Menu w="190" trigger={triggerProps => {
            return  <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                        <HamburgerIcon style={{ color: 'white', margin: 15 }}/>
                    </Pressable>;
            }}>
                <Menu.Item onPress={() => navigation.navigate('AccountStack')}>Mi cuenta</Menu.Item>
                <Menu.Item onPress={() => navigation.navigate('Settings')}>Configuración</Menu.Item>
                <Menu.Item onPress={() => navigation.navigate('Login')}>Cerrar sesión</Menu.Item>
            </Menu>
            </Box>
    </NativeBaseProvider>
    );
}

export default Toolbar;