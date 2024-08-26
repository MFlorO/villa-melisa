"use client"
import Link from 'next/link'
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import cabañas from '../../data/cabañas.json'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const GridImage = () => {
  return (
    <Grid templateColumns={{base:"repeat(1, 1fr)", xl:"repeat(3, 1fr)"}} mb='40px' gap={6}>
    {
      cabañas?.map( cabaña => (
        <GridItem w={{base:"350px", md:"450px"}} h={{base:'450px', md:'450px'}} bgColor="white" boxShadow="md" key={cabaña.id}>
          <Swiper modules={[Pagination]} spaceBetween={1} centeredSlides={true} pagination={{ clickable: true }} navigation grabCursor={true}
            style={{ width:'100%', height:'60%', display:'flex', justifyContent:'center', alignItems:'center'}}
          >
            {cabaña.images?.map( (image, index) => <SwiperSlide key={index} style={{ display:'flex', width: '100%', height:'100%', justifyContent:'center', alignItems:'center',  backgroundImage: `url(${image})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'}}/> )}
          </Swiper>
        
          <Flex w='100%' h='40%' direction="column" p='5% 3% 0% 3%' gap={4}>
            <Text fontSize={{base:"22px", md:'25px'}} color="#7A2D2C" textAlign='center' fontWeight='bold'>{cabaña.nombre}</Text>
            <Text fontSize={{base:"16px", md:'18px'}} color="black" textAlign='center' fontStyle="italic">{cabaña.descripcion}</Text> 
            <Flex w='100%' justifyContent='center'>
              <Link href={`/complejo/${cabaña.id}`}>
                <Text w='max-content' fontSize={{base:"14px", md:'16px'}} textDecoration='underline' color="#6F4E37">VER MÁS</Text> 
              </Link>
            </Flex>  
          </Flex>  
        </GridItem>
      ))
    }
    <style jsx global>
    {`
      .swiper-pagination {
        margin-top: 100px !important;
      }
      .swiper-pagination-bullet-active {
        background-color: #7A2D2C !important;
      }
    `}
    </style>
    </Grid>
  )
}

export default GridImage