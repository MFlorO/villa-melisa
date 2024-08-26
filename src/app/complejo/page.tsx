import { HEIGHT_NAVBAR_BASE, HEIGHT_NAVBAR_SM, PADDING_WEB_SM, PADDING_WEB_BASE } from '@/constants';
import { Title } from '@/components/ui';
import { Flex } from "@chakra-ui/react";
import { Caracteristics, GridImage } from '@/components/complejo';


export default function Cabañas() {
  return (
    <Flex w='100%' direction='column' minH='100vh' h='max-content' alignItems='center' mt={{base:HEIGHT_NAVBAR_BASE, md:HEIGHT_NAVBAR_SM}} px={{base:PADDING_WEB_BASE, lg:PADDING_WEB_SM}} gap={6}>

      <Flex  w='100%' direction='column' mt={{base:'2rem', md:'4rem'}}>
        <Title title='Acerca de nuestras cabañas'/>
      </Flex>

      <Caracteristics />

      <GridImage />

    </Flex>
  );
}
