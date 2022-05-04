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
        <Heading mt="5">Terminos y condiciones.</Heading>
          
          <Text mt="3" style={{textAlign: "justify"}} >Es requisito necesario para la adquisición de los servicios que se ofrecen
          en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación
          se redactan. El uso de nuestros servicios implicará que usted ha leído y aceptado los 
          Términos y Condiciones de Uso en el presente documento. Todas los servicios que son
          ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas
          por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones.
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          En algunos casos, para adquirir un servicio, será necesario el registro por parte del usuario,
          con ingreso de datos personales fidedignos y definición de una contraseña.
          El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en
          cualquier momento, en caso de que se haya registrado y que sea necesario para la solicitud
          de alguno de nuestros servicios.  La Última Chance Ags no asume la responsabilidad en caso
          de que entregue dicha clave a terceros.</Text>
          <Heading mt="5" >Aviso de privacidad.</Heading>
          <Text mt="3" style={{textAlign: "justify"}}>En cumplimiento con lo establecido por la Ley Federal de Protección de Datos Personales
          en Posesión de Particulares, La Última Chance Ags Comercio Electrónico SA de CV, en lo
          sucesivo señalada como "La Última Chance Ags", ubicado en Lic. Adolfo López Mateos
          408-Local A. Col. Centro C.P 20000 en Aguascalientes, Aguascalientes, México, como
          Responsable de sus Datos Personales hacen de su conocimiento la política de privacidad
          y manejo de datos personales, en la que en todo momento buscarán que el tratamiento de los
          mismos sea legítimo, controlado e informado, a efecto de asegurar la privacidad,
          confidencialidad, integridad y el derecho a la autodeterminación informativa de sus datos.
</Text>
          <Heading mt="5">Políticas de envios y devoluciones.</Heading>
          <Text mt="3" style={{textAlign: "justify"}}>Los precios publicados en el sitio NO incluyen costo de envío dentro de la República Mexicana
          salvo cuando expresamente lo indique algún equipo o alguna promoción en particular, los precios
          de los productos pueden cambiar en cualquier momento sin previo aviso, no se pueden combinar
          promociones de otros medios distintos a los presentados en este sitio. El cliente se compromete
          a proporcionar una dirección válida localizable dentro de la república mexicana donde pueda
          entregársele el pedido. En caso de que el cliente proporcione una dirección que no sea
          localizada por la paquetería, cualquier otro costo adicional será cubierto por el cliente mismo.</Text>
          <Text>{"\n"}</Text>
        </Container>
        </Center>
        </ScrollView>
        
      </NativeBaseProvider>
      
    );
  }


export default Terms;