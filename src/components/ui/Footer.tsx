"use client"
import { usePathname } from 'next/navigation';
import Mapa from "./Mapa";
import { PADDING_BASE_WEB, PADDING_MD_WEB } from '@/constants';
import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {

  const pathname = usePathname();

  return (
    <Flex w='100%' h='max-content' direction='column' as='footer'>

      <Flex w='100%' h='100%' bgColor='bgColor' justifyContent='space-between' color='text' py='70px' px={{base:PADDING_BASE_WEB, md:PADDING_MD_WEB}}>
        <Flex w={{base:'100%', sm: pathname === '/ubicacion' ? '100%' : '50%'}} direction='column' alignItems={pathname === '/ubicacion' ? 'center' : 'start'} justifyContent='center' fontWeight={300} fontSize='18px' gap={2} borderRight={pathname === '/ubicacion' ? 'none' : '1px solid #7A2D2C'}>
          <Flex>Cabo Garcia nº 66, Playas de Oro III</Flex>
          <Flex>Córdoba, Argentina</Flex>
          <Flex alignItems='center' gap={2} fontWeight={500} fontSize='18px'><Text>WhatsApp: </Text><Text color='highlight'>3516624922</Text></Flex>
          <Flex alignItems='center' gap={2} fontWeight={500} fontSize='18px'><Text>Emial: </Text><Text color='highlight'>contacto@villamelisa.com.ar</Text></Flex>
        </Flex>

        { pathname !== '/ubicacion' && <Flex w='49%' justifyContent='center'>{typeof window !== 'undefined' && <Mapa />}</Flex>}
      </Flex> 

      <Flex w='100%' h={{base:'max-content', sm:'60px'}} bgColor='highlight' color='text' justifyContent='center' alignItems='center' p='30px' fontSize={{base:'12px', sm:'14px'}} justifyContent='center' alignItems='center' direction={{base:'column', sm:'row'}} gap={1}>
        <Flex alignItems='center'>©{new Date().getFullYear()} | Desarrollo del sitio web por FLORENCIA OLDANI</Flex>
      </Flex> 
    
    </Flex>
  )
}

export default Footer