import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import GlobalStyle from '../resources/GlobalStyle';
import firebase from '../database/firebase';
import { auth } from '../database/firebase';

const DNovelty = ({navigation, route}) => {

    //AÑADIR EL PRODUCTO AL CARRITO
    const addToCart = async (name, price) => {
      try {
        await firebase.db.collection("users").doc(auth.currentUser?.email).collection("cart").add({
          name: name,
          price: price,
        })
        navigation.navigate('Cart');
      } catch (error) {
        console.log(error);
      }
  }

  const productos = route.params;

  return (
    <ScrollView>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={style.imageContainer}>
        <Image source={productos.img} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{productos.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                //marginLeft: 15,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ${productos.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Description</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {productos.about}
          </Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Date of Expiry</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {productos.date}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>

            <View>
            <TouchableOpacity onPress={() => addToCart(productos.name, productos.price)} style={GlobalStyle.largeButton}>
                <Text style={GlobalStyle.largeButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#F1F1F1',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  buyBtn: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: 'green',
    width: 80,
    height: 40,
    justifyContent: 'center',
    //borderTopLeftRadius: 25,
    //borderBottomLeftRadius: 25,
        borderRadius: 30,
    //marginLeft: 20,
            marginTop: 20,
            flexDirection: 'column',
            //justifyContent: 'space-between',
            alignItems: 'center',
  },
});

export default DNovelty;