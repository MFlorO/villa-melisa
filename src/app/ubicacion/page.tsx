import { HEIGHT_NAVBAR, PADDING_BASE_WEB, PADDING_MD_WEB } from '@/constants';
import { Title, Mapa } from '@/components/ui';
import { Flex, Text } from "@chakra-ui/react";

export default function Ubicacion() {  
  return (
    <Flex w='100%' direction='column' minH='100vh' h='max-content' bgColor='bgColor2' justifyContent='space-between' mt={HEIGHT_NAVBAR}>
      <Flex w='100%' h='100%' mt='4rem' direction='column'px={{base:PADDING_BASE_WEB, md:PADDING_MD_WEB}} gap={4}>
        <Title title='UBICACIÓN' />
        <Text>Estamos ubicacions en a pocos kilómetros de la ciudad de Villa Carlos Paz, en la pintoresca localidad de San Antonio de Arredondo, departamento de Punilla, sobre la Ruta Provincial Nº 14.</Text>
      </Flex>
      <Flex w='100%' h='500px'>{typeof window !== 'undefined' && <Mapa />}</Flex>
    </Flex>
  );
}
