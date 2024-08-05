import { Flex } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex w='100%' h={{base:'max-content', sm:'60px'}} bgColor='#6F4E37' color='white' justifyContent='center' alignItems='center' p='2%'>
      <Flex fontSize={{base:'12px', sm:'14px'}}>
        Cabañas Villa Melisa - Cabo Garcia nº 66 - - Playas de Oro III - WhatsApp 3516624922 / 3515909528 - contacto@villamelisa.com.ar -
      </Flex>
    </Flex>
  )
}

export default Footer