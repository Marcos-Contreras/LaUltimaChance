import * as React from 'react';
import { Button, NativeBaseProvider } from 'native-base';
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
import Toolbar from '../elements/Toolbar';


const HomeScreens = createStackNavigator();
export default function HomeStack({navigation}){
    return(
        <NativeBaseProvider>
        <HomeScreens.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#002171' },
                headerRight: () => (
                        <Toolbar/>
                      )
              }}>
            <HomeScreens.Screen name = "Home" component = {Home} options = {{ 
                    headerShown: true,
                    title: "Inicio",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Categories" component = {Categories} options = {{ 
                    headerShown: true,
                    title: "Categorías",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Snack" component = {Snack} options = {{ 
                    headerShown: true,
                    title: "Botanas",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "DairyProducts" component = {DairyProducts} options = {{ 
                    headerShown: true,
                    title: "Lácteos",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Beverages" component = {Beverages} options = {{ 
                    headerShown: true,
                    title: "Novedades",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Novelty" component = {Novelty} options = {{ 
                    headerShown: true,
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Offers" component = {Offers} options = {{ 
                    headerShown: true,
                    title: "Ofertas",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "Packages" component = {Packages} options = {{ 
                    headerShown: true,
                    title: "Paquetes",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "DNovelty" component = {DNovelty} options = {{ 
                    headerShown: true,
                    title: "",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "DOffers" component = {DOffers} options = {{ 
                    headerShown: true,
                    title: "",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
            <HomeScreens.Screen name = "DPackages" component = {DPackages} options = {{ 
                    headerShown: true,
                    title: "",
                    ...TransitionPresets.RevealFromBottomAndroid
                 }}
            />
        </HomeScreens.Navigator>
        </NativeBaseProvider>
    )
}