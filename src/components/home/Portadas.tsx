"use client"
import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { Flex, Text } from "@chakra-ui/react";

export const titleFont = Montserrat({ 
  subsets: ["latin"], 
  weight: ['400'] 
});

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

      <Flex position='absolute' w='100%' h='100%' bgSize='cover' bgPos='center' bgAttachment='fixed' bgRepeat='no-repeat' transform='translateZ(0)' style={{ backgroundImage: "url('/portada.jpg')", backgroundPositionY: `${scrollY * 0.7}px` }}/>

      <Flex w='100%' position='relative' direction='column' alignItems='center' justifyContent='center' color='white' gap={4}>
        <Text className={titleFont.className} fontWeight={400} fontSize={{base:'38px', sm:'100px'}} color='white' variant='h2'>BIENVENIDO</Text>
        <Text className={titleFont.className} fontWeight={600} fontSize={{base:'18px', sm:'50px'}} color='white' variant='h2'>Cabañas Villa Melisa</Text>
      </Flex>

    </Flex>
  );
};


export default Portadas;