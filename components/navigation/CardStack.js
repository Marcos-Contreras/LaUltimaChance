import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Card from '../Card';
import Checkout from '../Checkout';
import Thanks from '../Thanks';
import Toolbar from '../elements/Toolbar';

const CardScreens = createStackNavigator();
export default function CardStack(){
    return(
        <CardScreens.Navigator screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#002171' },
            headerRight: () => (
                    <Toolbar/>
                  )
          }}>
            <CardScreens.Screen name = "Card" component = {Card} options = {{ 
                    headerShown: true,
                    title: "Cart",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <CardScreens.Screen name = "Checkout" component = {Checkout} options = {{ 
                    headerShown: true,
                    title: "Checkout",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <CardScreens.Screen name = "Thanks" component = {Thanks} options = {{ 
                    headerShown: true,
                    title: "Thank you",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
        </CardScreens.Navigator>
    )
}