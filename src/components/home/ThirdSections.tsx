"use client"
import { useState } from "react";
import { Flex } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ThirdSections = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const movies = [
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
    <Flex w='100%' h='100vh' justifyContent='center' alignItems='center' p='6% 0%' bgColor='#fdeddd6e' id="carrousel-section">
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
        movies.map((movie, index) => (
          <SwiperSlide key={index} style={{ display:'flex', width: '600px', height:'500px', justifyContent:'center', alignItems:'center'}}>
            <Flex w='100%' h='100%' position='relative'>
              <Flex position='absolute' w='100%' h='100%' zIndex={9}
              bgColor={index === activeIndex ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.3)"} // Fondo más oscuro para imágenes no activas  
              />
              <Flex w='100%' h='100%' bgImage={movie.image} bgSize='cover' bgRepeat='no-repeat' boxShadow={index === activeIndex ? '0 10px 10px rgba(0,0,0,0.2)' : 'none'}>
                <Flex w='100%' h='100%' position='relative' direction='column'>
                  {index === activeIndex && <Flex position='absolute' w='30%' h='100%' bg="rgba(255, 255, 255, 0.1)"  backdropFilter="blur(5px)"/>}
                  <Flex w='100%' h='100%' direction='column' justifyContent='end' p='0 0 30px 30px' color='white' gap={2} zIndex={8}>
                    <Flex>{movie.title}</Flex>
                    <Flex>{movie.description}</Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))
      }
    </Swiper>
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

export default ThirdSections;

