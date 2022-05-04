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
        <AccountScreens.Navigator>
            <AccountScreens.Screen name = "Account" component = {Account} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "PayPalLogin" component = {PayPalLogin} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "Settings" component = {Settings} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "Contact" component = {Contact} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "Rate" component = {Rate} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "Locate" component = {Locate} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "PayPalAccount" component = {PayPalAccount} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <AccountScreens.Screen name = "Terms" component = {Terms} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
        </AccountScreens.Navigator>
    )
}