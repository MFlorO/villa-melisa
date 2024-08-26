"use client"
import { useRouter, usePathname } from 'next/navigation';
import { HEIGHT_NAVBAR_BASE, HEIGHT_NAVBAR_SM, PADDING_WEB_SM, PADDING_WEB_BASE } from '@/constants';
import { Flex } from "@chakra-ui/react"

const Navbar = () => {

  const pathname = usePathname()
  const router = useRouter()

  return (
    <Flex position='absolute' w='100%' direction={{base:'column', lg:'row'}} top={0} h={{base:HEIGHT_NAVBAR_BASE, md:HEIGHT_NAVBAR_SM}} bg="bgColor" alignItems='center' px={{base:PADDING_WEB_BASE, lg:PADDING_WEB_SM}} py={{base:'2%', md:'0.5%'}} justifyContent={{base:'space-between', lg:'space-between'}} zIndex={99999}>
      <Flex w='100px' h='80%' bgImage='/logo-villa-melisa.png' bgSize='contain' bgRepeat='no-repeat' bgPos={{base:'center', md:'center'}} onClick={() => router.push('/')} cursor='pointer' />
      <Flex h='100%' flexWrap='wrap' justifyContent={{base:'center', lg:'start'}} alignItems='center' gap={4} color='white' fontSize={{base:'14px', md:'18px'}}>
        <Flex onClick={() => router.push('/')} cursor='pointer' fontWeight={400} color={ pathname === '/' ? 'white' : 'text' }>INICIO</Flex>
        <Flex onClick={() => router.push('/complejo')} cursor='pointer' fontWeight={300} color={ pathname?.includes('complejo') ? 'white' : 'text' }>COMPLEJO</Flex>
        <Flex onClick={() => router.push('/servicios')} cursor='pointer' fontWeight={300} color={ pathname?.includes('servicios') ? 'white' : 'text' }>SERVICIOS</Flex>
        <Flex onClick={() => router.push('/ubicacion')} cursor='pointer' fontWeight={300} color={ pathname?.includes('ubicación') ? 'white' : 'text' }>UBICACIÓN</Flex>
        <Flex as='a' href='#form-contact' cursor='pointer' color='text' fontWeight={300}>CONTACTO</Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar