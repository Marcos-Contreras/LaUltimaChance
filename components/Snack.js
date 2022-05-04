import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native';

import plants from './ProductsSnack.js';
const width = Dimensions.get('window').width / 2 - 30;

const Snack = ({navigation}) => {
  
    const Card = ({plant}) => {
    return (

      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => navigation.navigate('DOffers', plant)}>

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
              source={plant.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>


           <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
          <Text style={{fontWeight: 'bold', fontSize: 12, textAlign: 'center'}}>
            {plant.name}
          </Text>
          </View>
          

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              ${plant.price}
            </Text>
          </View>


        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: 'white'}}>

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 5,
          paddingBottom: 60,
        }}
        numColumns={2}
        data={plants}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: '#ffffff' ,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.3,
  }
 
});
export default Snack;