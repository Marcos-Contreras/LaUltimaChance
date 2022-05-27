import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//IMPORTANDO NATIVEBASE
import { NativeBaseProvider, Text, Button, Box, Container, Heading, Center, ScrollView } from 'native-base';

function Terms ({ navigation }) {
    return (
      
      <NativeBaseProvider>
        
        <ScrollView style={{width:'100%'}} >
        <Center bg="#fff">
        <Container >
        <Heading mt="5">Terms and conditions.</Heading>
          
          <Text mt="3" style={{textAlign: "justify"}} >It is a necessary requirement for the acquisition of the services offered
          on this site, that you read and accept the following Terms and Conditions below
          are drafted. The use of our services will imply that you have read and accepted the
          Terms and Conditions of Use in this document. All the services that are
          offered by our website could be created, charged, sent or presented
          by a third web page and in such case they would be subject to their own Terms and Conditions.
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          In some cases, to acquire a service, registration by the user will be necessary,
          with entry of reliable personal data and definition of a password.
          The user can choose and change the password for their account management access at
          any time, in case you have registered and it is necessary for the application
          of any of our services. Last Chance Ags assumes no responsibility in the event
          to deliver said key to third parties.</Text>
          <Heading mt="5" >Notice of Privacy.</Heading>
          <Text mt="3" style={{textAlign: "justify"}}>In compliance with the provisions of the Federal Law on Protection of Personal Data
          in Possession of Individuals, La Última Chance Ags Comercio Electrónica SA de CV, in what
          successively indicated as "La Última Chance Ags", located in Lic. Adolfo López Mateos
          408-Local A. Col. Centro C.P 20000 in Aguascalientes, Aguascalientes, Mexico, as
          Responsible for your Personal Data make your privacy policy known
          and handling of personal data, in which at all times they will seek that the treatment of the
          themselves is legitimate, controlled and informed, in order to ensure privacy,
          confidentiality, integrity and the right to informative self-determination of your data.
</Text>
          <Heading mt="5">Shipping and return policies.</Heading>
          <Text mt="3" style={{textAlign: "justify"}}>The prices published on the site DO NOT include shipping costs within the Mexican Republic
          Except when expressly indicated by a particular team or promotion, the prices
          of the products can change at any time without prior notice, they cannot be combined
          promotions from other means than those presented on this site. The client agrees
          to provide a valid address located within the Mexican Republic where you can
          deliver the order. In case the client provides an address that is not
          located by the parcel, any other additional cost will be covered by the customer.</Text>
          <Text>{"\n"}</Text>
        </Container>
        </Center>
        </ScrollView>
        
      </NativeBaseProvider>
      
    );
  }


export default Terms;