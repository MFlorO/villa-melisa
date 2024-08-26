"use client"
import { useEffect, useRef, useState } from 'react';
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";


const SecondSections = () => {

  const breakpoint = useBreakpointValue({ base: 'base', md: 'md', lg: 'lg', xl: 'xl' });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll2 = () => {

      if (sectionRef) {

        const windowHeight = window.innerHeight;

        const scrollPosition = window.scrollY + windowHeight;

        const triggerPoint = 1.5 * windowHeight;

        if (scrollPosition > triggerPoint && window.scrollY < 1000 ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll2);
    handleScroll2();

    return () => {
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  return (
    <Flex w='100%' minH={{base:'max-content', md:'100vh'}} h='max-content' p={{base:'0%', md:'9%'}} bgColor='bgColor2' transition='background-color 0.5s ease-out' justifyContent={{base:'center', md:'start'}} alignItems='center' ref={sectionRef} id="section2">
      <Flex position='relative' w='100%' h='100%' direction={{base:'column', md:'row'}} p={{base:'8% 4%', md:'0%'}}  alignItems={{base:'center', md:'start'}} justifyContent={{base:'center', md:'start'}}>
      {
        breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl'  
        ? <>      
          <Flex w='50%' h='100%' className={isVisible ? 'animate-second-section-left' : ''}> 
            <Flex width='650px' h='450px' bgImage='/portada.jpg' bgSize='cover' bgRepeat='no-repeat'/>
          </Flex>
          <Flex position='absolute' w='100%' h='100%' justifyContent='end' alignItems='center' zIndex={100}>
            <Flex w='55%' h='70%' bgColor='white' p='4%' direction='column' justifyContent='center' gap={2} className={isVisible ? 'animate-second-section-right' : ''}>
              <Text fontSize='24px' fontWeight='bold' color='highlight'>UBICACIÓN</Text>
              <Text fontSize='20px'>Las Cabañas Villa Melisa se encuentran ubicadas a pocos kilómetros de la ciudad de Villa Carlos Paz, en la pintoresca localidad de San Antonio de Arredondo, departamento de Punilla, sobre la Ruta Provincial Nº 14.</Text>
              <Text fontSize='20px'>A solo media cuadra del Río San Antonio, la región se caracteriza por sus playas de aguas cristalinas, reflejando la naturaleza viva en un área de contacto entre la montaña y la llanura.</Text>
            </Flex>
          </Flex>
        </> 
      : <>
          <Flex w='100%' h='max-content'> 
            <Flex width='100%' h='250px' bgImage='/portada.jpg' bgSize='cover' bgRepeat='no-repeat'/>
          </Flex>
          <Flex position='relative' w='100%' h='max-content' justifyContent='end' alignItems='center' zIndex={100}>
            <Flex w='100%' h='100%' bgColor='white' p='4%' direction='column' justifyContent='center' gap={2}>
              <Text fontSize='18px' fontWeight='bold' color='highlight'>UBICACIÓN</Text>
              <Text fontSize='16px'>Las Cabañas Villa Melisa se encuentran ubicadas a pocos kilómetros de la ciudad de Villa Carlos Paz, en la pintoresca localidad de San Antonio de Arredondo, departamento de Punilla, sobre la Ruta Provincial Nº 14.</Text>
              <Text fontSize='16px'>A solo media cuadra del Río San Antonio, la región se caracteriza por sus playas de aguas cristalinas, reflejando la naturaleza viva en un área de contacto entre la montaña y la llanura.</Text>            </Flex>
          </Flex>
        </> 
      }
      </Flex>
    </Flex>
  );
};

export default SecondSections;
