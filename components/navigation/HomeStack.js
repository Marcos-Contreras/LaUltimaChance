import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../Home';
import Categories from '../Categories';
import Snack from '../Snack';
import DairyProducts from '../DairyProducts';
import Beverages from '../Beverages';
import Novelty from '../Novelty';
import Offers from '../Offers';
import Packages from '../Packages';
import DNovelty from '../DNovelty';
import DOffers from '../DOffers';
import DPackages from '../DPackages';


const HomeScreens = createStackNavigator();
export default function HomeStack(){
    return(
        <HomeScreens.Navigator>
            <HomeScreens.Screen name = "Home" component = {Home} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Categories" component = {Categories} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Snack" component = {Snack} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "DairyProducts" component = {DairyProducts} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Beverages" component = {Beverages} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Novelty" component = {Novelty} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Offers" component = {Offers} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Packages" component = {Packages} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "DNovelty" component = {DNovelty} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "DOffers" component = {DOffers} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "DPackages" component = {DPackages} options = {{ 
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
        </HomeScreens.Navigator>
    )
}