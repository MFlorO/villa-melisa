import { HEIGHT_NAVBAR_BASE, HEIGHT_NAVBAR_SM, PADDING_WEB_SM, PADDING_WEB_BASE } from '@/constants';
import { Title, Mapa } from '@/components/ui';
import { Flex, Text } from "@chakra-ui/react";

export default function Ubicacion() {  
  return (
    <Flex w='100%' direction='column' h='max-content' bgColor='bgColor2' justifyContent='space-between' mt={{base:HEIGHT_NAVBAR_BASE, sm:HEIGHT_NAVBAR_SM}}>
      <Flex w='100%' h='100%' mt={{base:'2rem', md:'4rem'}} direction='column' px={{base:PADDING_WEB_BASE, md:PADDING_WEB_SM}} gap={4}>
        <Title title='UBICACIÓN' />
        <Text textAlign='center' fontSize={{base:'18px', md:'20px'}}>Estamos ubicacions en a pocos kilómetros de la ciudad de Villa Carlos Paz, en la pintoresca localidad de San Antonio de Arredondo, departamento de Punilla, sobre la Ruta Provincial Nº 14.</Text>
      </Flex>
      {/* {typeof window !== 'undefined' && <Flex w='100%' h='500px' mt='1.5rem'><Mapa /></Flex>} */}
    </Flex>
  );
}
