"use client"
import { useRouter, usePathname } from 'next/navigation';
import { HEIGHT_NAVBAR, PADDING_BASE_WEB, PADDING_MD_WEB } from '@/constants';
import { Flex } from "@chakra-ui/react"

const Navbar = () => {

  const pathname = usePathname()
  const router = useRouter()

  return (
    <Flex position='absolute' w='100%' top={0} h={HEIGHT_NAVBAR} bg="bgColor" alignItems='center' px={{base:PADDING_BASE_WEB, md:PADDING_MD_WEB}} py='0.5%' justifyContent={{base:'space-around', sm:'space-between'}} zIndex={99999}>
      <Flex w={{base:'70px', sm:'100px'}} h='100%' bgImage='/logo_villa_melisa.png' bgSize='contain' bgRepeat='no-repeat' bgPos='center' onClick={() => router.push('/')}/>
      <Flex h='100%' alignItems='center' gap={4} color='white'>
        <Flex onClick={() => router.push('/')} cursor='pointer' fontWeight={400} color={ pathname === '/' ? 'white' : 'text' }>INICIO</Flex>
        <Flex onClick={() => router.push('/complejo')} cursor='pointer' fontWeight={300} color={ pathname.includes('complejo') ? 'white' : 'text' }>COMPLEJO</Flex>
        <Flex onClick={() => router.push('/servicios')} cursor='pointer' fontWeight={300} color={ pathname.includes('servicios') ? 'white' : 'text' }>SERVICIOS</Flex>
        <Flex onClick={() => router.push('/ubicacion')} cursor='pointer' fontWeight={300} color={ pathname.includes('ubicación') ? 'white' : 'text' }>UBICACIÓN</Flex>
        <Flex as='a' href='#form-contact' cursor='pointer' color='text' fontWeight={300}>CONTACTO</Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar