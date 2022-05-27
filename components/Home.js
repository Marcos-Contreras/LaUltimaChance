import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View, Box} from "react-native";
import GlobalStyle from '../resources/GlobalStyle';
import { auth } from '../database/firebase';

function Home ({ navigation }) {

  return (

    <View style={styles.container}>

            <Text style={GlobalStyle.welcome}>
                Welcome, {auth.currentUser?.email}
            </Text>

      <TouchableOpacity style={styles.button1}
       activeOpacity={0.2}
       onPress={() => navigation.navigate('Categories')}>
        <Text  style ={{  color: '#fff', fontSize: 30, fontWeight: 'bold'}}> PRODUCTS </Text>
      </TouchableOpacity> 

       <TouchableOpacity style={styles.button2}
         activeOpacity={0.2}
      onPress={() => navigation.navigate('Offers')}>
        <Text  style ={{  color: '#fff', fontSize: 30, fontWeight: 'bold'}}> ¡OFFERS! </Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.button3}
        activeOpacity={0.2}
      onPress={() => navigation.navigate('Novelty')}>
        <Text  style ={{  color: '#fff', fontSize: 30, fontWeight: 'bold'}}> NOVELTY </Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.button4}
        activeOpacity={0.2}
      onPress={() => navigation.navigate('Packages')}>
        <Text  style ={{  color: '#fff', fontSize: 30, fontWeight: 'bold'}}> PACKAGES </Text>
      </TouchableOpacity> 

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },

  button1: {
    alignItems: "center",
    backgroundColor: "#3276e3",
    marginTop: 0,
  shadowColor: '#3276e3',
            shadowOffset: { width: 4, height: 3 },
            shadowOpacity: 0.2,
    padding: 30,
    borderRadius: 10
  },

   button2: {
    alignItems: "center",
    backgroundColor: "#a81919",
    marginTop: 30,
    shadowColor: '#BD0909',
            shadowOffset: { width: 4, height: 3},
            shadowOpacity: 0.2,
    padding: 30,
   borderRadius: 10
  },

   button3: {
    alignItems: "center",
    backgroundColor: "#44DA51",
    shadowColor: '#64B523',
            shadowOffset: { width: 4, height: 3},
            shadowOpacity: 0.2,
    marginTop:30,
    borderRadius: 10,
    padding: 30
  },

   button4: {
    alignItems: "center",
    backgroundColor: "#9F764D",
      shadowColor: '#73592F',
            shadowOffset: { width: 4, height: 3},
            shadowOpacity: 0.2,
    borderRadius: 10,
    marginTop: 30,
    padding: 30
  },
});

export default Home;
