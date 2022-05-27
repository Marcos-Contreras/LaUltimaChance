import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import COLORS from '../../consts/colors';
import DescPackages from './DescPackages.js';
const width = Dimensions.get('window').width / 2 - 30;
import firebase from '../database/firebase';

const Packages = ({navigation}) => {


  const [packges, setPackges] = useState([]);

  //MOSTRAR PAQUETES
  useEffect(() => {
    let abortController = new AbortController();
    firebase.db.collection("packages").onSnapshot((querySnapshot) => {
      const shownPackages = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, price, img, about } = doc.data();
        const id = doc.id;
        shownPackages.push({ id: id, name: name, price: price, img: img, about: about });
      });
      // console.log(cart)
      setPackges(shownPackages);
      console.log(packges);
    });
    abortController.abort();
  }, []);

  
      
      
      
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: 'white'}}>
      
      

        {packges.map(packge => {
          return (
            <TouchableOpacity key={packge.id}
            activeOpacity={0.2}
            onPress={() => navigation.navigate('DPackages', packge)}>
    
            <View style={style.card}>
              <View style={{alignItems: 'flex-end'}}>
    
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    justifyContent: 'center',
                  }}>
                </View>
              </View>
    
              <View
                style={{
                  height: 100,
                  alignItems: 'center',
                }}>
                <Image
                  source={packge.img}
                  style={{flex: 1, resizeMode: 'contain'}}
                />
              </View>
    
    
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 5,
                }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {packge.name}
              </Text>
              </View>
              
    
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  ${packge.price}
                </Text>
              </View>
    
    
            </View>
          </TouchableOpacity>
          )
        })}


    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: '#F1F1F1' ,
    width: 260,
    alignItems: 'center',
    marginHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    marginVertical: 25,
    shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.3,
  }
 
});
export default Packages;