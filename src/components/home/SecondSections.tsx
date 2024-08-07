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
        // Obtenemos la altura total de la ventana (viewport)
        const windowHeight = window.innerHeight;

        // La altura total de la página desplazada + altura de la ventana 
        const scrollPosition = window.scrollY + windowHeight;

        // Calculamos el punto en el que queremos activar la animación (130vh)
        const triggerPoint = 1.5 * windowHeight;

        // Si la posición de scroll es mayor o igual al triggerPoint, activamos la animación
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
    <Flex w='100%' h={{base:'80vh', sm:'100vh'}} p={{base:'0%', sm:'9%'}} bgColor='bgColor2' transition='background-color 0.5s ease-out' justifyContent={{base:'center', sm:'start'}} alignItems='center' ref={sectionRef} id="section2">
      <Flex position='relative' w='100%' h='100%' direction={{base:'column', sm:'row'}} p={{base:'4%',sm:'0%'}}  alignItems={{base:'center', sm:'start'}} justifyContent={{base:'center', sm:'start'}}>
      {
        breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl'  
        ?<>      
        <Flex w={{base:'100%', sm:'50%'}} h={{base:'max-content', sm:'100%'}} className={isVisible ? 'animate-second-section-left' : ''}> 
          <Flex width={{base:'100%', md:'650px'}} h={{base:'200px', md:'450px'}} bgImage='/portada.jpg' bgSize='cover' bgRepeat='no-repeat'/>
        </Flex>
        <Flex position={{base:'relative', sm:'absolute'}} w='100%' h={{base:'max-content', sm:'100%'}} justifyContent='end' alignItems='center' zIndex={100}>
          <Flex w={{base:'100%', sm:'55%'}} h='70%' bgColor='white' p='4%' direction='column' justifyContent='center' gap={2} className={isVisible ? 'animate-second-section-right' : ''}>
            <Text fontSize='18px' fontWeight='bold' color='highlight'>UBICACIÓN</Text>
            <Text fontSize='15px'>Las Cabañas Villa Melisa se encuentran ubicadas a pocos kilómetros de la ciudad de Villa Carlos Paz, en la pintoresca localidad de San Antonio de Arredondo, departamento de Punilla, sobre la Ruta Provincial Nº 14.</Text>
            <Text fontSize='15px'>A solo media cuadra del Río San Antonio, la región se caracteriza por sus playas de aguas cristalinas, reflejando la naturaleza viva en un área de contacto entre la montaña y la llanura.</Text>
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
