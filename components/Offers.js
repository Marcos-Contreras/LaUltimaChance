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
import {TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
//import COLORS from '../../consts/colors';
import DescOffers from './DescOffers.js';
const width = Dimensions.get('window').width / 2 - 30;

const Offers = ({navigation}) => {
  
    const Card = ({productos}) => {
    return (

      <TouchableOpacity
        activeOpacity={0.2}
        onPress={() => navigation.navigate('DOffers', productos)}>

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
              source={productos.img}
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
            {productos.name}
          </Text>
          </View>
          

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              ${productos.price}
            </Text>
          </View>


        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: 'white'}}>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
      </View>
      <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
      <Image source={
        require('../assets/bannerC.png')}/>
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 5,
          paddingBottom: 60,
        }}
        numColumns={2}
        data={DescOffers}
        renderItem={({item}) => {
          return <Card productos={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  imgStyle: {
        width: 100,
        height: 100,
        marginTop:30,
    },
  card: {
    height: 225,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1' ,
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
export default Offers;
