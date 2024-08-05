"use client"
import { useRouter, usePathname  } from 'next/navigation';
import { Flex } from "@chakra-ui/react"
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {

  const pathname = usePathname()
  const router = useRouter()

  return (
    <Flex position='absolute' w='100%' h='50px' bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(5px)" zIndex={99999} alignItems='center' p='0.5% 3%' justifyContent={{base:'space-around', sm:'space-between'}}>
      <Flex w={{base:'70px', sm:'100px'}} h='100%' bgImage='/logo_villa_melisa.png' bgSize='contain' bgRepeat='no-repeat' bgPos='center' onClick={() => router.push('/')}/>
      <AiFillHome color={pathname !== '/' ? '#F88800' : '#fff'} size='1.5rem' cursor='pointer' onClick={() => router.push('/')} style={{display:'flex'}}/>
      <Flex h='100%' alignItems='center' gap={4} color='white'>
        <Flex onClick={() => router.push('/servicios')} cursor='pointer' color={pathname !== '/' ? '#F88800' : '#fff'}>Servicios</Flex>
        <Flex onClick={() => router.push('/complejo')} cursor='pointer' color={pathname !== '/' ? '#F88800' : '#fff'}>Complejo</Flex>
        <Flex as='a' href='#form-contact' cursor='pointer' color={pathname !== '/' ? '#F88800' : '#fff'}>Contacto</Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar