import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../SignUp';
import ForgotPassword from '../ForgotPassword';

const Auth = createStackNavigator();
export default function AuthStack(){
    return(
        <Auth.Navigator screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#002171' },
          }}>
            <Auth.Screen name = "WelcomeScreen" component = {Welcome} options = {{ 
                    headerShown: true,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <Auth.Screen name = "Login" component = {Login} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <Auth.Screen name = "SignUp" component = {SignUp} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <Auth.Screen name = "ForgotPassword" component = {ForgotPassword} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
        </Auth.Navigator>
    )
}