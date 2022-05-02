import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View, Box} from "react-native";

function Categories({ navigation }) {
    return (

    
    <View style={styles.container}>

      <TouchableOpacity style={styles.button1}
      onPress={() => navigation.navigate('Snack')}>
        <Text style ={{  color: '#fff', fontSize: 30, fontWeight: 'bold'}} > BOTANAS </Text>
      </TouchableOpacity> 

       <TouchableOpacity style={styles.button2}
      onPress={() => navigation.navigate('DairyProducts')}>
        <Text  style ={{  color: '#fff', fontSize: 30, fontWeight: 'bold'}}> LÁCTEOS </Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.button3}
      onPress={() => navigation.navigate('Beverages')}>
        <Text  style ={{  color: '#fff', fontSize: 30, fontWeight: 'bold'}}> BEBIDAS </Text>
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
            shadowOffset: { width: 4, height: 3},
            shadowOpacity: 0.2,
    borderRadius: 10,
    padding: 30
  },

   button2: {
    alignItems: "center",
    backgroundColor: "#a81919",
    shadowColor: '#BD0909',
            shadowOffset: { width: 4, height: 3},
            shadowOpacity: 0.2,
    borderRadius: 10,
     marginTop: 30,
    padding: 30
  },

   button3: {
    alignItems: "center",
    shadowColor: '#64B523',
            shadowOffset: { width: 4, height: 3},
            shadowOpacity: 0.2,
    borderRadius: 10,
    backgroundColor: "#44DA51",
    marginTop: 30,
    padding: 30
  },


});

export default Categories;