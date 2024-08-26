import { HEIGHT_NAVBAR_BASE, HEIGHT_NAVBAR_SM, PADDING_WEB_SM, PADDING_WEB_BASE } from '@/constants';
import { Title } from '@/components/ui';
import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import { MdOutlineSecurity } from "react-icons/md";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { FaWifi, FaCar, FaPaw, FaUtensils, FaDumbbell } from "react-icons/fa";
import { BiSolidLandscape } from "react-icons/bi";

export default function Servicios() {  

  const imagesService = ['/servicios/1.jpg', '/servicios/2.jpg', '/servicios/3.jpg', '/servicios/4.jpg', '/servicios/5.jpg', '/servicios/6.jpg', 
    '/servicios/7.jpg', '/servicios/8.jpg', '/servicios/9.jpg', '/servicios/10.jpg', '/servicios/11.jpg', '/servicios/12.jpg'
  ];

  return (
    <Flex w='100%' direction='column' minH='100vh' h='max-content' justifyContent='space-between' bgColor='bgColor2' mt={{base:HEIGHT_NAVBAR_BASE, sm:HEIGHT_NAVBAR_SM}} px={{base:PADDING_WEB_BASE, md:PADDING_WEB_SM}} gap={6}>
      
      <Flex w='100%' h='max-content' mt={{base:'2rem', md:'4rem'}} direction='column' gap={4}>
        <Title title='Nuestros Servicios' />
        <Text fontSize={{base:'18px', md:'22px'}} textAlign="center" mb={10}> En Cabañas Villa Melisa, nos esforzamos por ofrecerte una experiencia completa y cómoda durante tu estadía.Nuestros servicios están pensados para brindarte el máximo confort y entretenimiento, tanto para adultos como para los más pequeños.</Text>
        <Grid templateColumns={{base:"repeat(2, 1fr)", sm:"repeat(4, 1fr)"}} mb='30px' gap={4}>
          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={2}>
           <FaPaw size='35px'/> 
           <Flex fontSize={{base:'15px', md:'18px'}} textAlign='center'>Alojamiento Pet Friendly. Aceptamos mascotas pequeñas.</Flex>
          </GridItem>
          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={2}>
           <FaUtensils size='35px'/> 
           <Flex fontSize={{base:'15px', md:'18px'}} textAlign='center'>Zona de Parrillas privadas</Flex>
          </GridItem>
          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={2}>
           <FaCar size='35px'/> 
           <Flex fontSize={{base:'15px', md:'18px'}} textAlign='center'>Cochera Techada y privada para un auto</Flex>
          </GridItem>
          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={2}>
           <PiSwimmingPoolBold size='35px'/> 
           <Flex fontSize={{base:'15px', md:'18px'}} textAlign='center'>Pileta con calefacción solar</Flex>
          </GridItem>
          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={2}>
           <FaDumbbell size='35px'/> 
           <Flex fontSize={{base:'15px', md:'18px'}} textAlign='center'>Gimnasio al Aire Libre</Flex>
          </GridItem>
          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={2}> 
           <FaWifi size='35px'/> 
           <Flex fontSize={{base:'15px', md:'18px'}} textAlign='center'>Wifi</Flex>
          </GridItem>
          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={2}> 
           <BiSolidLandscape size='35px'/> 
           <Flex fontSize={{base:'15px', md:'18px'}} textAlign='center'>Vista a las montañas</Flex>
          </GridItem>
          <GridItem display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={2}> 
           <MdOutlineSecurity size='35px'/> 
           <Flex fontSize={{base:'15px', md:'18px'}} textAlign='center'>Alarma en cada cabaña</Flex>
          </GridItem>
        </Grid>
        <Text fontSize={{base:'18px', md:'22px'}} textAlign="center">Estos son solo algunos de los servicios que ofrecemos para hacer de tu estadía una experiencia inolvidable.</Text>
        <Text fontSize={{base:'18px', md:'22px'}} textAlign="center" fontStyle='italic'>¡Te esperamos en Cabañas Villa Melisa!</Text>
      </Flex> 

      <Flex w='100%' flexWrap={{base:'nowrap', sm:'wrap'}} direction={{base:'column', sm:'row'}} alignItems='center' justifyContent='center' gap={{base:2, sm:1}}>
        { imagesService?.map((image, index) => <Flex w={{base:'100%', sm:'350px'}} h='400px' bgImage={image} bgRepeat='no-repeat' bgSize='cover'key={index} />) }
      </Flex>

    </Flex>
  );
}
