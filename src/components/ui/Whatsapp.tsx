import { Flex } from "@chakra-ui/react";
import { ImWhatsapp } from "react-icons/im";
import { NEXT_NUMERO_DE_WHATSAPP } from './../../../env';

const Whatsapp = () => {
  return (
    <Flex position='fixed' bottom='10px' right='10px' bgColor='#4dc247' borderRadius='50%' boxShadow='2px 2px 6px rgba(0,0,0,0.4)' 
    as='a' href={`https://wa.me/${NEXT_NUMERO_DE_WHATSAPP}`} target="_blank" zIndex='999'
    >
      <ImWhatsapp style={{ width:'45px', height:'45px', padding:'10px', verticalAlign:'middle', fill:'white' }} />
    </Flex>
  )
}

export default Whatsapp