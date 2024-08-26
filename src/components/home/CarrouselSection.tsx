"use client"
import { useState } from "react";
import { Title } from "../ui";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


const CarrouselSection = () => {

  const breakpoint = useBreakpointValue({ base: 'base', md: 'md', lg: 'lg', xl: 'xl' });
  const [activeIndex, setActiveIndex] = useState(0);

  const cabañas = [
    { redirect:'/complejo/3', title: 'Cabaña para 4 personas', image: '/cabaña4personas/0.jpg', description: '' },
    { redirect:'/complejo/1', title: 'Cabaña para 6 personas', image: '/cabaña6personas2plantas/0.jpg', description: 'Cabaña para 6 personas de dos plantas' },
    { redirect:'/complejo/2', title: 'Cabaña para 6 personas', image: '/cabañapara6personas1planta/0.jpg', description: 'Cabaña para 6 personas de una sola planta' },
    { redirect:'/servicios', title: 'Asadores', image: '/servicios/3.jpg', description: 'Para disfrutar un buen asado' },
    { redirect:'/servicios', title: 'Piletas', image: '/servicios/12.jpg', description: 'Piletas con calefacción solar con hermosas vistas' },
    { redirect:'/complejo/2', title: 'Cabaña para 6 personas', image: '/cabañapara6personas1planta/0.jpg', description: 'Cabaña para 6 personas de una sola planta' },
    { redirect:'/servicios', title: 'Asadores', image: '/servicios/3.jpg', description: 'Para disfrutar un buen asado' },
  ];

  const handleSlideChange = (swiper: any) => setActiveIndex(swiper.realIndex)

  return (
    <Flex w='100%' h={{base:'50vh', md:'80vh'}} direction='column' justifyContent='space-between' alignItems='center' p='4% 0%' bgColor='bgColor2' gap={{base:2, sm:0}} id="carrousel-section">
      
      {/* <Title title='Explore nuestras cabañas y las vistas espectaculares que las rodean'/> */}

      <Flex w='100%' h='max-content' justifyContent='center' alignItems='center'>
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]} effect={'coverflow'} grabCursor={true} onSlideChange={handleSlideChange} spaceBetween={30} 
          slidesPerView='auto' centeredSlides={true} navigation pagination={{ clickable: true }} autoplay={{ delay: 2500, disableOnInteraction: false }} loop={true} 
          coverflowEffect={{
            rotate: 0, // Mantén esto en 0 para que las tarjetas estén rectas
            stretch: -10, // Ajusta esto para controlar la superposición. Un valor negativo las acercará
            depth: 250, // Controla la profundidad para mayor o menor efecto 3D
            modifier: 1,
            slideShadows: false, // Opcional: desactiva las sombras para un efecto más limpio
          }}
          style={{ height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}
        >
        {
          breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl'  
          ? cabañas.map((cabaña, index) => (
              <SwiperSlide key={index} style={{ display:'flex', width: '650px', height:'500px', justifyContent:'center', alignItems:'center'}}>
                <Flex w='100%' h='100%' position='relative'>
                  <Flex position='absolute' w='100%' h='100%' zIndex={9}
                  bgColor={index === activeIndex ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.3)"}
                  />
                  <Flex w='100%' h='100%' bgImage={cabaña.image} bgSize='cover' bgRepeat='no-repeat' boxShadow={index === activeIndex ? '0 10px 10px rgba(0,0,0,0.2)' : 'none'}>
                    <Flex w='100%' h='100%' position='relative' direction='column'>
                      {index === activeIndex && <Flex position='absolute' w='30%' h='100%' bg="rgba(255, 255, 255, 0.1)"  backdropFilter="blur(5px)"/>}
                      <Flex w='100%' h='100%' direction='column' justifyContent='end' p='0 0 30px 30px' color='white' gap={2} zIndex={8}>
                        <Flex>{cabaña.title}</Flex>
                        <Flex>{cabaña.description}</Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </SwiperSlide>
            ))
          : cabañas.map((cabaña, index) => (
            <SwiperSlide key={index} style={{ display:'flex', width: '300px', height:'400px', justifyContent:'center', alignItems:'center'}}>
              <Flex w='100%' h='100%' position='relative'>
                <Flex position='absolute' w='100%' h='100%' zIndex={9}
                bgColor={index === activeIndex ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.3)"}
                />
                <Flex w='100%' h='100%' bgImage={cabaña.image} bgSize='cover' bgRepeat='no-repeat' boxShadow={index === activeIndex ? '0 10px 10px rgba(0,0,0,0.2)' : 'none'}>
                  <Flex w='100%' h='100%' position='relative' direction='column'>
                    {index === activeIndex && <Flex position='absolute' w='30%' h='100%' bg="rgba(255, 255, 255, 0.1)"  backdropFilter="blur(5px)"/>}
                    <Flex w='100%' h='100%' direction='column' justifyContent='end' p='0 0 30px 30px' color='white' gap={2} zIndex={8}>
                      <Flex>{cabaña.title}</Flex>
                      <Flex>{cabaña.description}</Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))
        }
        </Swiper>
        </Flex>

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
    </Flex>
  )
}

export default CarrouselSection;

