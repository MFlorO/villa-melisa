"use client"
import { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";


const Portadas = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return (
      <Flex position='relative' w='100%' h='100vh' direction='column' overflow='hidden' alignItems='center' justifyContent='center' id="portada-section">

        <Flex position='absolute' w='100%' h='100%' bgSize='cover' bgPos='center' bgAttachment='fixed' bgRepeat='no-repeat'
          transform='translateZ(0)'
          style={{ backgroundImage: "url('/portada.jpg')", backgroundPositionY: `${scrollY * 0.7}px` }}
        />

        <Flex w='100%' position='relative' direction='column' alignItems='center' justifyContent='center' color='white' gap={4}>
          <Text fontSize={{base:'50px', sm:'90px'}} fontWeight='bold'>Bienvenido</Text>
          <Text fontSize={{base:'30px', sm:'50px'}} fontWeight='bold'>Cabañas Villa Melisa</Text>
        </Flex>

      </Flex>
    );
};


export default Portadas;