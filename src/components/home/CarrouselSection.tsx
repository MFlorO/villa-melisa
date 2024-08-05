"use client"
import { useState } from "react";
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
    { title: 'Justice League', image: '/foto1.jpg', description: 'Descripción de Justice League' },
    { title: 'Guardians of the Galaxy', image: '/foto2.jpg', description: 'Descripción de Guardians of the Galaxy' },
    { title: 'Spider-Man', image: '/foto3.jpg', description: 'Descripción de Spider-Man' },
    { title: 'Justice League', image: '/foto4.jpg', description: 'Descripción de Justice League' },
    { title: 'Guardians of the Galaxy', image: '/foto5.jpg', description: 'Descripción de Guardians of the Galaxy' },
    { title: 'Spider-Man', image: '/portada.jpg', description: 'Descripción de Spider-Man' },
  ];

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex); // Actualiza el índice activo al cambiar la diapositiva
  };

  return (
    <Flex w='100%' h={{base:'60vh', sm:'100vh'}} direction='column' justifyContent='space-between' alignItems='center' p='4% 0%' bgColor='#fdeddd6e' gap={{base:2, sm:0}} id="carrousel-section">
      
      <Flex w='95%' fontSize={{base:'18px', sm:'20px'}} color='#6F4E37' fontWeight='bold' justifyContent='center' textAlign='center'>Explore nuestras cabañas y las vistas espectaculares que las rodean.</Flex>
      
      <Flex w='100%' h='max-content' justifyContent='center' alignItems='center'>
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={'auto'}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true} // Hacer que el carrusel sea infinito
          navigation
          effect={'coverflow'}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0, // Mantén esto en 0 para que las tarjetas estén rectas
            stretch: -10, // Ajusta esto para controlar la superposición. Un valor negativo las acercará
            depth: 250, // Controla la profundidad para mayor o menor efecto 3D
            modifier: 1,
            slideShadows: false, // Opcional: desactiva las sombras para un efecto más limpio
          }}
          style={{ height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} // Ajusta el padding según lo necesites
          onSlideChange={handleSlideChange} // Escucha el evento de cambio de diapositiva
        >
        {
          breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl'  
          ? cabañas.map((cabaña, index) => (
              <SwiperSlide key={index} style={{ display:'flex', width: '600px', height:'500px', justifyContent:'center', alignItems:'center'}}>
                <Flex w='100%' h='100%' position='relative'>
                  <Flex position='absolute' w='100%' h='100%' zIndex={9}
                  bgColor={index === activeIndex ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.3)"} // Fondo más oscuro para imágenes no activas  
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
                bgColor={index === activeIndex ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.3)"} // Fondo más oscuro para imágenes no activas  
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
          background-color: #F88800 !important;
        }
      `}
      </style>
    </Flex>
  )
}

export default CarrouselSection;

