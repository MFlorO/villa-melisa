import { HEIGHT_NAVBAR, PADDING_BASE_WEB, PADDING_MD_WEB } from '@/constants';
import { Title } from '@/components/ui';
import { Flex, Text } from "@chakra-ui/react";
import { MdOutlinePets, MdOutlineSecurity, MdAir } from "react-icons/md";
import { PiHairDryerFill, PiSwimmingPoolBold } from "react-icons/pi";
import { FaWifi, FaCar } from "react-icons/fa6";
import { TbAirConditioning, TbGrill } from "react-icons/tb";
import { BiSolidLandscape } from "react-icons/bi";

export default function Servicios() {  

  const imagesService = ['/service/1.jpg', '/service/5.jpg', '/service/6.jpg', '/service/7.jpg', '/service/8.jpg', '/service/2.jpg', '/service/3.jpg', '/service/4.jpg', ];

  return (
    <Flex w='100%' direction='column' minH='100vh' h='max-content' justifyContent='space-between' bgColor='bgColor2' mt={HEIGHT_NAVBAR} px={{base:PADDING_BASE_WEB, md:PADDING_MD_WEB}}>
      <Flex w='100%' h='20rem' mt='4rem' direction='column' gap={4}>
        <Title title='Nuestros Servicios' />
        <Flex w='100%' alignItems='center' justifyContent='center' direction='column'>
          <Text color='black'></Text>
          <Flex w='100%' color='primary' alignItems='center' justifyContent='center' gap={4}>
            <MdOutlinePets size='35px'/>
            <PiHairDryerFill size='35px'/>
            <MdAir size='35px'/>
            <FaCar size='35px'/>
            <PiSwimmingPoolBold size='35px'/>
            <BiSolidLandscape size='35px'/>
            <TbAirConditioning size='35px'/>
            <FaWifi size='35px'/>
            <TbGrill size='35px'/>
          </Flex>
        </Flex>
      </Flex> 
      <Flex w='100%' flexWrap='wrap' alignItems='center' justifyContent='center' gap={1}>
        { imagesService?.map((image, index) => <Flex w='350px' h='400px' bgImage={image} bgRepeat='no-repeat' bgSize='contain' key={index} />) }
      </Flex>
    </Flex>
  );
}
