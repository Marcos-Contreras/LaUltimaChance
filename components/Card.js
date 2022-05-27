import React, { useState, useEffect } from "react";
//IMPORTANDO NATIVEBASE
import { Button, Box, Heading, Text, Center,  NativeBaseProvider, Divider, Stack } from 'native-base';
import { TouchableOpacity } from "react-native";
import GlobalStyle from '../resources/GlobalStyle';
import firebase from '../database/firebase';


function Card ({ navigation }) {

  const [products, setProducts] = useState([]);
  let finalPrice = 0;
  const [fp, setFp] = useState();

  //MOSTRAR PRODUCTOS EN EL CARRITO
  useEffect(() => {
    let abortController = new AbortController();
    firebase.db.collection("cart").onSnapshot((querySnapshot) => {
      const cart = [];
      finalPrice = 0;
      querySnapshot.docs.forEach((doc) => {
        const { name, price } = doc.data();
        const id = doc.id;
        cart.push({ id: id, name: name, price: price });
        finalPrice = finalPrice + price;
        // console.log(finalPrice);
      });
      // console.log(cart)
      setProducts(cart);
      setFp(finalPrice);
      console.log(finalPrice);
    });
    abortController.abort();
  }, []);


  //BORRAR PRODUCTOS DEL CARRITO
  const deleteCart = async (idProd) => {
    const dbRef = firebase.db.collection('cart').doc(idProd);
    await dbRef.delete();
  }

      return (
        <NativeBaseProvider >
          <Box safeArea p="2" py="8" w="90%" maxW="390">
            <Text style={GlobalStyle.largeLabelText}>
              CART
            </Text>

            {products.map(product => {
              return (
                <Box key={product.id}>
                  
                  <Heading paddingTop={"2"} paddingLeft={"10"}>{product.name}</Heading>
                    <Text style={{ fontSize: 18 }} paddingLeft={"10"}>Price: ${product.price}</Text>
                    <TouchableOpacity onPress={() => deleteCart(product.id)} activeOpacity={0.2} style={GlobalStyle.deleteButton} >
                      <Text style={GlobalStyle.smallButtonText}> DELETE </Text>
                    </TouchableOpacity>
                    <Divider width={"90%"} my="4" thickness="5" mx="5" />
                </Box>
              )
            })} 

            <Center>
            <Heading paddingTop={"8"}>Total: ${fp}</Heading>
              <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Checkout')} style={GlobalStyle.largeButton}>
                <Text style={GlobalStyle.largeButtonText}> BUY NOW </Text>
              </TouchableOpacity>
            </Center>
          </Box>
        </NativeBaseProvider>
      );
    }


export default Card;