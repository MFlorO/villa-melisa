"use client"
import { useEffect, useRef, useState } from 'react';
import { Flex, Text, useBreakpointValue  } from "@chakra-ui/react";


const SecondSections = () => {

  const breakpoint = useBreakpointValue({ base: 'base', md: 'md', lg: 'lg', xl: 'xl' });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {

    if(typeof window !== undefined){
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
    }
  }, []);

  return (
    <Flex w='100%' h={{base:'80vh', sm:'100vh'}} p='8% 9%' transition='background-color 0.5s ease-out' justifyContent={{base:'center', sm:'start'}} alignItems='center' ref={sectionRef} id="section2">
      <Flex position='relative' w='100%' h='100%' direction={{base:'column', sm:'row'}} gap={{base:2, sm:0}}>
        {
          breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl'  
          ?<>      
          <Flex w={{base:'100%', sm:'50%'}} h={{base:'max-content', sm:'100%'}} className={isVisible ? 'animate-second-section-left' : ''}> 
            <Flex width={{base:'100%', md:'650px'}} h={{base:'200px', md:'450px'}} bgImage='/portada.jpg' bgSize='cover' bgRepeat='no-repeat'/>
          </Flex>
          <Flex position={{base:'relative', sm:'absolute'}} w='100%' h={{base:'max-content', sm:'100%'}} justifyContent='end' alignItems='center' zIndex={100}>
            <Flex w={{base:'100%', sm:'55%'}} h='70%' bgColor='white' p='4%' direction='column' className={isVisible ? 'animate-second-section-right' : ''}>
              <Text>LOREM LOREM LOREM</Text>
              <Text>
                LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
              </Text>
            </Flex>
          </Flex>
        </> 
        : <>
        <Flex w={{base:'100%', sm:'50%'}} h={{base:'max-content', sm:'100%'}}> 
          <Flex width={{base:'100%', md:'650px'}} h={{base:'200px', md:'450px'}} bgImage='/portada.jpg' bgSize='cover' bgRepeat='no-repeat'/>
        </Flex>
        <Flex position={{base:'relative', sm:'absolute'}} w='100%' h={{base:'max-content', sm:'100%'}} justifyContent='end' alignItems='center' zIndex={100}>
          <Flex w={{base:'100%', sm:'55%'}} h='70%' bgColor='white' p='4%' direction='column'>
            <Text>LOREM LOREM LOREM</Text>
            <Text>
              LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
              LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
            </Text>
          </Flex>
        </Flex>
      </> 
        }
      </Flex>
    </Flex>
  );
};

export default SecondSections;
