import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Card from '../Card';
import Checkout from '../Checkout';
import Thanks from '../Thanks';

const CardScreens = createStackNavigator();
export default function CardStack(){
    return(
        <CardScreens.Navigator>
            <CardScreens.Screen name = "Card" component = {Card} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <CardScreens.Screen name = "Checkout" component = {Checkout} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <CardScreens.Screen name = "Thanks" component = {Thanks} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
        </CardScreens.Navigator>
    )
}