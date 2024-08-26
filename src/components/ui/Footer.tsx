"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
// import Mapa from "./Mapa";
import { HEIGHT_FOOTER_BASE, HEIGHT_FOOTER_SM, PADDING_WEB_BASE, PADDING_WEB_SM } from '@/constants';
import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {

  const pathname = usePathname();

  return (
    <Flex w='100%' h='max-content' direction='column' as='footer'>

      <Flex w='100%' minH={{base:HEIGHT_FOOTER_BASE, sm:HEIGHT_FOOTER_SM}} h='max-content' bgColor='bgColor' justifyContent='space-between' color='text' direction={{base:'column', sm:'row'}} py='15px' px={{base:PADDING_WEB_BASE, md:PADDING_WEB_SM}}>
        <Flex w={{base:'100%', sm: pathname === '/ubicacion' ? '100%' : '50%'}} direction='column' alignItems={{base:'center', sm:pathname === '/ubicacion' ? 'center' : 'start'}} justifyContent='center' fontWeight={300} fontSize={{base:'14px', sm:'18px'}} gap={2} borderRight={{base:'none', sm: pathname === '/ubicacion' ? 'none' : '1px solid #7A2D2C'}}>
          <Flex>Cabo Garcia nº 66, Playas de Oro III</Flex>
          <Flex>Córdoba, Argentina</Flex>
          <Flex alignItems='center' gap={2} fontWeight={400}><Text>WhatsApp: </Text><Text color='highlight'>3516624922</Text></Flex>
          <Flex alignItems='center' gap={2} fontWeight={400}><Text>Emial: </Text><Text color='highlight'>cabanasvillamelisa@gmail.com</Text></Flex>
        </Flex>

        {/* { pathname !== '/ubicacion' && <Flex w='49%' justifyContent='center'>{typeof window !== 'undefined' && <Mapa />}</Flex>} */}
      </Flex> 

      <Flex w='100%' h={{base:'45px', sm:'60px'}} bgColor='highlight' color='text' justifyContent='center' alignItems='center' p='30px' fontSize={{base:'12px', sm:'14px'}} direction={{base:'column', sm:'row'}} gap={1}>
        <Link href={'https://www.linkedin.com/in/florencia-oldani/'} target="_blank">
          <Flex alignItems='center' textAlign='center'>Copyright © Florencia Oldani {new Date().getFullYear()}</Flex>
        </Link>
      </Flex> 
    
    </Flex>
  )
}

export default Footer