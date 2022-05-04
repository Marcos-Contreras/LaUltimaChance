import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Welcome from '../Welcome';
import Login from '../Login';

const Auth = createStackNavigator();
export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen name = "WelcomeScreen" component = {Welcome} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <Auth.Screen name = "Login" component = {Login} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
        </Auth.Navigator>
    )
}