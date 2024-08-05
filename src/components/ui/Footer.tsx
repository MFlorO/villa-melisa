import { Flex } from '@chakra-ui/react'
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <Flex w='100%' h={{base:'max-content', sm:'60px'}} bgColor='#6F4E37' color='white' justifyContent='center' alignItems='center' p='2%'>
      <Flex fontSize={{base:'12px', sm:'14px'}} justifyContent='center' alignItems='center' direction={{base:'column', sm:'row'}} gap={1}>
        <Flex alignItems='center'>Cabañas Villa Melisa -</Flex>
        <Flex alignItems='center'>Cabo Garcia nº 66 - </Flex>
        <Flex alignItems='center'>Playas de Oro III - </Flex>
        <Flex alignItems='center'><ImWhatsapp size='15px' styles={{ px:'5px' }} /> 3516624922 -</Flex>
        <Flex alignItems='center'>contacto@villamelisa.com.ar </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer