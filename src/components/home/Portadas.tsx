"use client"
import { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";


const Portadas = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    
    if(typeof window !== undefined){
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
    return (
      <Flex position='relative' w='100%' h='100vh' direction='column' overflow='hidden' id="section1">

        <Flex position='absolute' w='100%' h='100%' bgSize='cover' bgPos='center' bgAttachment='fixed' bgRepeat='no-repeat'
          transform='translateZ(0)'
          style={{ backgroundImage: "url('/portada.jpg')", backgroundPositionY: `${scrollY * 0.7}px` }}
        />

        <Flex h='100%' position='relative' alignItems='center' justifyContent='center' color='white' opacity={50}>
          <Text>Bienvenido</Text>
        </Flex>
  
        <Flex position='absolute' justifyContent='center' color='white' left='50vw' top='50vh'>
          <Text>Explora</Text>
        </Flex>
      </Flex>
    );
};


export default Portadas;