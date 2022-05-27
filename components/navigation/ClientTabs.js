import React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './HomeStack';
import CardStack from './CardStack';
import AccountStack from './AccountStack';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator screenOptions={({route, navigation}) => ({ 
                tabBarShowLabel : true,
                tabBarActiveTintColor : '#002171',
                tabBarInactiveTintColor : 'gray',
                tabBarLabelStyle: { paddingBottom : 6 },
                tabBarStyle : {
                    // backgroundColor : "#002171"
                    height : 58
                    
                },
            })}>
            {/* <StatusBar/> */}
            <ClientTabs.Screen
                name="HomeScreen"
                component = {HomeStack}
                options ={{ 
                    tabBarLabel : "HOME",
                    navBarHidden : true,
                    headerShown : false,
                    tabBarIcon : ({color})=>(
                    <MaterialCommunityIcons
                        name = "home"
                        type = "material"
                        color = {color}
                        size = {33}
                    />
                    )
                 }}
                 
            />

            <ClientTabs.Screen
                name="Cart"
                component = {CardStack}
                options ={{ 
                    tabBarLabel : "CART",
                    headerShown : false,
                    tabBarIcon : ({color, size})=>(
                        <MaterialCommunityIcons
                        name = "cart"
                        type = "material"
                        color = {color}
                        size = {33}
                        />
                     )
                 }}
            />

            <ClientTabs.Screen
                name="Accounts"
                component = {AccountStack}
                options ={{ 
                    tabBarLabel : "ACCOUNT",
                    headerShown : false,
                     tabBarIcon : ({color, size})=>(
                        <MaterialCommunityIcons
                        name = "account"
                        type = "material"
                        color = {color}
                        size = {33}
                        />
                     )
                 }}
            />


        </ClientTabs.Navigator>
    )
}