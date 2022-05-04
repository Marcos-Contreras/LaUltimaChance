import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { ScrollView, NativeBaseProvider, Text, Button, Box, Heading,  Radio, HStack, CheckIcon, Input, Divider, Image, Select, Checkbox, Link } from 'native-base';

function Checkout ({ navigation }) {
  const [value, setValue] = React.useState("one");
  const [value2, setValue2] = React.useState("one2");
  let [service, setService] = React.useState("");
  let [service1, setService1] = React.useState("");
  let [service2, setService2] = React.useState("");
    return (
      <NativeBaseProvider>
        <ScrollView>
        <Box flex={1} bg="#fff" alignItems="center" >
        <HStack space={1} justifyContent="center">
        
      <Box my={10} marginLeft={5} flex={1} >
      <Heading mx="3">Tus datos</Heading>
      <Input mx="3" my="1" placeholder="Nombre" w="80%" maxWidth="320px" />
      <Input mx="3" my="1" placeholder="Apellidos" w="80%" maxWidth="300px" />
      <Input mx="3" my="1" placeholder="Correo electrónico" w="80%" maxWidth="300px" />
      <Heading mx="3">Dirección</Heading>
      <Input mx="3" my="1" placeholder="Domicilio" w="80%" maxWidth="300px" />
      <Select marginX={1.5} my="1" w="85%" selectedValue={service} maxWidth="300px" accessibilityLabel="Paiis" placeholder="País" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="México" value="mex" />
        </Select>
        <Select marginX={1.5} my="1" w="85%" selectedValue={service1} maxWidth="300px" accessibilityLabel="Estadoo" placeholder="Estado" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService1(itemValue)}>
          <Select.Item label="Aguascalientes" value="ags" />
        </Select>
        <Select marginX={1.5} my="1" w="85%" selectedValue={service2} maxWidth="300px" accessibilityLabel="Municioo" placeholder="Municipio" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService2(itemValue)}>
          <Select.Item label="Aguascalientes" value="agss" />
          <Select.Item label="Jesús María" value="jm" />
        </Select>      
      <Input mx="3" my="1" placeholder="Código Postal" w="80%" maxWidth="300px" />
      <Input mx="3" my="1" placeholder="Número de telefono" w="80%" maxWidth="300px" />

      </Box> 
      <Box my={10} marginRight={5} flex={1} > 
      <Heading>Envio</Heading>
      <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
          >
            <Radio size={"sm"} value="one" my={1}>
              <Text mx="2">La Última Chance envio <Text>{"\n"}</Text>$10 - Zona centro</Text> 
            </Radio>
            <Radio size={"sm"} value="two" my={1}>
            <Text mx="2">La Última Chance envio <Text>{"\n"}</Text>$20 - Fuera del centro</Text> 
            </Radio>
            <Radio size={"sm"} value="three" my={1}>
            <Text mx="2">Recoger en tienda<Text>{"\n"}</Text>$0 - Gratis</Text> 
            </Radio>
          </Radio.Group>
          <Heading mt={3}>Pago</Heading>
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

          <Checkbox size="sm" value="test" accessibilityLabel="checkbox"><Text mx="2">He leído los <Link _text={{
      
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
        Terminos y condiciones.
      </Link></Text></Checkbox> 
      </Box> 
    </HStack>

    <Heading>Resumen</Heading>
    <Divider  bg={"#000"} width={"50%"}>  </Divider>
    <Heading my="1">Total a pagar: 78$</Heading>
    <Button width={"50%"} height={"6%"} my="2" bg={"#002171"} onPress={() => navigation.navigate("Thanks")}>Comprar ahora</Button>

    
        </Box>
        </ScrollView>
      </NativeBaseProvider>
    );
  }


export default Checkout;