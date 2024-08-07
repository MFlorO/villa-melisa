"use client"
import Link from 'next/link'
import { HEIGHT_NAVBAR, PADDING_BASE_WEB, PADDING_MD_WEB } from '@/constants';
import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Cabañas() {
  return (
    <Flex w='100%' direction='column' minH='100vh' h='max-content' alignItems='center' mt={HEIGHT_NAVBAR} px={{base:PADDING_BASE_WEB, md:PADDING_MD_WEB}}>

      <Flex w='100%' direction='column' color='black'>
        <Text>Cabañas</Text>
        <Text>Cabañas de 4 a 6 personas ( la mas grande con dos dormitorios y dos baños)</Text>
        <Text>Cocinas (con horno) completamente equipadas con vajilla, cafetera, microondas, tostadora, etc . Baños completamente equipados, secador de pelo.</Text>
        <Text>Ropa blanca ( sábanas y toallas). Servicio de limpieza.</Text>
        <Text>Direct TV Satelital, Internet WI-FI, Calefacción , Estacionamiento. Teléfono gratuito para llamadas locales.</Text>
      </Flex>


      <Grid templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(3, 1fr)"}} gap={6}>
          <GridItem w={{base:"280px", sm:"350px"}} h={{base:"max-content", sm:"500px"}} bgColor="white" boxShadow="md">

            <Swiper modules={[Pagination]} spaceBetween={1} centeredSlides={true} pagination={{ clickable: true }} navigation grabCursor={true}
              style={{ width:'100%', height:'60%', display:'flex', justifyContent:'center', alignItems:'center'}}
            >
              <SwiperSlide style={{ display:'flex', width: '100%', height:'100%', justifyContent:'center', alignItems:'center',  backgroundImage: "url('/portada.jpg')", backgroundSize:'cover', backgroundPosition:'center', backgrounRepeat:'no-repeat'}}/>
              <SwiperSlide style={{ display:'flex', width: '100%', height:'100%', justifyContent:'center', alignItems:'center',  backgroundImage: "url('/portada.jpg')", backgroundSize:'cover', backgroundPosition:'center', backgrounRepeat:'no-repeat'}}/>
              <SwiperSlide style={{ display:'flex', width: '100%', height:'100%', justifyContent:'center', alignItems:'center',  backgroundImage: "url('/portada.jpg')", backgroundSize:'cover', backgroundPosition:'center', backgrounRepeat:'no-repeat'}}/>
              <SwiperSlide style={{ display:'flex', width: '100%', height:'100%', justifyContent:'center', alignItems:'center',  backgroundImage: "url('/portada.jpg')", backgroundSize:'cover', backgroundPosition:'center', backgrounRepeat:'no-repeat'}}/>
            </Swiper>
          
            <Flex w='100%' h='40%' direction="column" justifyContent="space-around" p='3%' gap={4}>
              <Text fontSize="20px" color="#6F4E37" fontWeight='bold'>Cabañas para 6 personas</Text>
              <Text fontSize="13px" color="#6F4E37" fontStyle="italic">(de dos plantas)</Text>
            </Flex>
          </GridItem>
      </Grid>

    </Flex>
  );
}
