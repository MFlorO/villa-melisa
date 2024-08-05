import Mapa from "./Mapa";
import { Flex, Text } from "@chakra-ui/react";

const FormContact = () => {
  return (
    <Flex w='100%' h='100vh' id="form-contact">
        <Flex w='100%' h='100%' direction={{base:'column', sm:'row'}}>
            <Flex w={{base:'100%', sm:'50%'}} h='100%' direction='column' alignItems='center' p='6% 4%' zIndex={100}>
                <Flex fontSize='45px' color='#F88800'>CONTACTANOS</Flex>
                <Flex fontSize='18px' color='black' textAlign='center'>Estamos aquí para hacer que tu experiencia en Cabañas Villa Melisa sea inolvidable. Si tienes alguna pregunta o deseas hacer una reserva, no dudes en contactarnos.</Flex>
                <Flex>FORMULARIO</Flex>
            </Flex>
            <Flex w={{base:'100%', sm:'50%'}} h='100%' bgImage='/portada.jpg' bgSize='cover' bgRepeat='no-repeat' justifyContent='center' alignItems='center'>
                {typeof window !== 'undefined' && <Mapa />}
            </Flex>
        </Flex>
    </Flex>
  )
}

export default FormContact;