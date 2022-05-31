import React, { useState, useEffect } from "react";
//IMPORTANDO NATIVEBASE
import { ScrollView, NativeBaseProvider, Text, Button, Box, Heading,  Radio, HStack, CheckIcon, Input, Divider, Image, Select, Checkbox, Link } from 'native-base';
import { auth } from "../database/firebase";
import firebase from '../database/firebase';


function Checkout ({ navigation, route }) {

  //PARA ALMACENAR ID'S DE PRODUCTOS QUE SE VAN A BORRAR
  const products = [];

 //CREAR VENTA
  const addSale = async () => {
    try {
      await firebase.db.collection("users").doc(auth.currentUser?.email).collection("sales").add({
        email: auth.currentUser?.email,
        price: price,
      })
      //BORRAR PRODUCTOS DEL CARRITO
      deleteCart();
      navigation.replace('Thanks');
    } catch (error) {
      console.log(error);
    }
}

//TOMAR TODOS LOS PRODUCTOS DEL CARRITO PARA LUEGO BORRARLOS
useEffect(() => {
  let abortController = new AbortController();
  firebase.db.collection("users").doc(auth.currentUser?.email).collection("cart").onSnapshot((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
      console.log('XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');
      const id = doc.id;
      products.push({ id: id });
    });
    console.log(products.length);
  });
  abortController.abort();
}, []);

const deleteCart = async () => {
  for (let i = 0; i < products.length-1; i++) {
    const prodlength = products.length();
    console.log(prodlength);
    const dbRef = firebase.db.collection('users').doc(auth.currentUser?.email).collection('cart').doc(products[i]);
    await dbRef.delete();
  }
}


  //SE RECIBE PRECIO PROVENIENTE DEL CARRITO
  const price = route.params;

    return (
      <NativeBaseProvider>
        <ScrollView>
        <Box flex={1} bg="#fff" alignItems="center" >
        <HStack space={1} justifyContent="center">
        
      <Box my={10} marginLeft={5} flex={1} >
      <Heading mx="3">Your data</Heading>
      <Input mx="3" my="1" placeholder="Name" w="80%" maxWidth="320px" />
      <Input mx="3" my="1" placeholder="Last name" w="80%" maxWidth="300px" />
      <Input mx="3" my="1" placeholder="Email" w="80%" maxWidth="300px" />
      <Heading mx="3">Address</Heading>
      <Input mx="3" my="1" placeholder="Address" w="80%" maxWidth="300px" />
      <Select marginX={1.5} my="1" w="85%" selectedValue={service} maxWidth="300px" accessibilityLabel="Paiis" placeholder="Country" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="México" value="mex" />
        </Select>
        <Select marginX={1.5} my="1" w="85%" selectedValue={service1} maxWidth="300px" accessibilityLabel="Estadoo" placeholder="State" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService1(itemValue)}>
          <Select.Item label="Aguascalientes" value="ags" />
        </Select>
        <Select marginX={1.5} my="1" w="85%" selectedValue={service2} maxWidth="300px" accessibilityLabel="Municioo" placeholder="City" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService2(itemValue)}>
          <Select.Item label="Aguascalientes" value="agss" />
          <Select.Item label="Jesús María" value="jm" />
        </Select>      
      <Input mx="3" my="1" placeholder="Postal code" w="80%" maxWidth="300px" />
      <Input mx="3" my="1" placeholder="Phone number" w="80%" maxWidth="300px" />

      </Box> 
      <Box my={10} marginRight={5} flex={1} > 
      <Heading>Shipping</Heading>
      <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
          >
            <Radio size={"sm"} value="one" my={1}>
              <Text mx="2">La Última Chance shipping <Text>{"\n"}</Text>$10 - Downtown area</Text> 
            </Radio>
            <Radio size={"sm"} value="two" my={1}>
            <Text mx="2">La Última Chance shipping <Text>{"\n"}</Text>$20 - Outside the downtown area</Text> 
            </Radio>
            <Radio size={"sm"} value="three" my={1}>
            <Text mx="2">Store Pickup<Text>{"\n"}</Text>$0 - Free</Text> 
            </Radio>
          </Radio.Group>
          <Heading mt={3}>Payment</Heading>
      <Radio.Group
            name="myRadioGroup1"
            accessibilityLabel="favorite number1"
            value2={value2}
            onChange={(nextValue) => {
              setValue2(nextValue);
            }}
          >
          <Radio size={"sm"} value="one2" my={1}>
            <Image mx="3" source={
      require( "../assets/tarjeta1.png")
    }  width={20}  
       height={5}
    />
            </Radio>
            <Radio size={"sm"} value="two2" my={1}>
            <Image mx="3" source={
      require( "../assets/paypal.png")
    }  width={20}  
       height={10}
    />
            </Radio>
            <Radio size={"sm"} value="three2" my={1}>
            <Image mx="3" source={
      require( "../assets/oxxo.png")
    }  width={20}  
       height={10}
    />
            </Radio>
            
            
          </Radio.Group>

          <Checkbox size="sm" value="test" accessibilityLabel="checkbox"><Text mx="2">I have read <Link _text={{
      
      _light: {
        color: "cyan.500"
      },
      color: "cyan.300"
    }} onPress={() => navigation.navigate('Terms')} isUnderlined _hover={{
      _text: {
        _light: {
          color: "cyan.600"
        },
        color: "cyan.400"
      }
    }}>
        the terms
        and conditions
      </Link></Text></Checkbox> 
      </Box> 
    </HStack>

    <Heading>Summary</Heading>
    <Divider  bg={"#000"} width={"50%"}>  </Divider>
    <Heading my="1">Total to pay: ${price}</Heading>
    <Button width={"50%"} height={"6%"} my="2" bg={"#002171"} onPress={() => addSale()}>BUY NOW</Button>

    
        </Box>
        </ScrollView>
      </NativeBaseProvider>
    );
  }


export default Checkout;