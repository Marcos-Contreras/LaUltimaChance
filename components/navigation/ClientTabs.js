import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-elements';
import HomeStack from './HomeStack';
import CardStack from './CardStack';
import AccountStack from './AccountStack';
import { StatusBar } from 'native-base';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator >
            {/* <StatusBar/> */}
            <ClientTabs.Screen
                name="HomeScreen"
                component = {HomeStack}
                options ={{ 
                    tabBarLabel : "Inicio",
                    headerShown : false
                    // tabBarIcon : ({color, size})=>(
                    //     <Icon
                    //         name = "home"
                    //         type = "material"
                    //         color = {color}
                    //         size = {size}
                    //     />
                    // )
                 }}
            />

            <ClientTabs.Screen
                name="Cart"
                component = {CardStack}
                options ={{ 
                    tabBarLabel : "Carrito",
                    headerShown : false
                    // tabBarIcon : ({color, size})=>(
                    //     <Icon
                    //         name = "home"
                    //         type = "material"
                    //         color = {color}
                    //         size = {size}
                    //     />
                    // )
                 }}
            />

            <ClientTabs.Screen
                name="Accounts"
                component = {AccountStack}
                options ={{ 
                    tabBarLabel : "Cuenta",
                    headerShown : false
                    // tabBarIcon : ({color, size})=>(
                    //     <Icon
                    //         name = "home"
                    //         type = "material"
                    //         color = {color}
                    //         size = {size}
                    //     />
                    // )
                 }}
            />


        </ClientTabs.Navigator>
    )
}