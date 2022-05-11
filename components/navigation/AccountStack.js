import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Account from '../Account';
import Terms from '../Terms';
import PayPalLogin from '../PayPalLogin';
import Settings from '../Settings';
import Contact from '../Contact';
import Rate from '../Rate';
import Locate from '../Locate';
import PayPalAccount from '../PayPalAccount';

const AccountScreens = createStackNavigator();
export default function AccountStack(){
    return(
        <AccountScreens.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#002171' },
              }}>
            <AccountScreens.Screen name = "Account" component = {Account} options = {{ 
                    headerShown: true,
                    title: "Cuenta",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "PayPalLogin" component = {PayPalLogin} options = {{ 
                    headerShown: true,
                    title: "PayPal",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "Settings" component = {Settings} options = {{ 
                    headerShown: true,
                    title: "Configuración",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "Contact" component = {Contact} options = {{ 
                    headerShown: true,
                    title: "Contacto",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "Rate" component = {Rate} options = {{ 
                    headerShown: true,
                    title: "Evaluar App",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "Locate" component = {Locate} options = {{ 
                    headerShown: true,
                    title: "Ubícanos",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "PayPalAccount" component = {PayPalAccount} options = {{ 
                    headerShown: true,
                    title: "PayPal",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "Terms" component = {Terms} options = {{ 
                    headerShown: true,
                    title: "Términos",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
        </AccountScreens.Navigator>
    )
}