import Mapa from "./Mapa";
import { Flex, Text } from "@chakra-ui/react";

const FormContact = () => {

  return (
    <Flex w='100%' h='100vh' id="form-contact">
        <Flex w='100%' h='100%' direction={{base:'column', sm:'row'}}>
            <Flex w={{base:'100%', sm:'50%'}} h='100%' direction='column' justifyContent='space-between' alignItems='center' p='4%' zIndex={100}>
                <Text>CONTACTANOS</Text>
                <Text>
                    LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                    LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                    LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                    LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                </Text>
            </Flex>
            <Flex w={{base:'100%', sm:'50%'}} h='100%' bgImage='/portada.jpg' bgSize='cover' bgRepeat='no-repeat' justifyContent='center' alignItems='center'>
                {typeof window !== 'undefined' && <Mapa />}
            </Flex>
        </Flex>
    </Flex>
  )
}

export default FormContact;