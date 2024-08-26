import { Metadata, ResolvingMetadata } from "next";
import cabañas from '../../../data/cabañas.json'
import { HEIGHT_NAVBAR_BASE, HEIGHT_NAVBAR_SM, PADDING_WEB_SM, PADDING_WEB_BASE } from '@/constants';
import { Title } from "@/components/ui";
import { Flex, Text } from '@chakra-ui/react';


interface Caracteristica {
  titulo: string;
  descripcion: string;
}

interface Cabaña {
  nombre: string;
  descripcion: string;
  images: string[];
  caracteristicas: Caracteristica[];
}

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {

  const id = Number(params.id);
  const cabañaId:Cabaña = cabañas[id];

  return {
    title: cabañaId?.nombre ?? "Cabaña no encontrada",
    description: cabañaId?.descripcion ?? "",
    openGraph: {
      title: cabañaId?.nombre ?? "Cabaña no encontrada",
      images: [ `/${ cabañaId?.images[0] }`],
    },
  };
}


export default function CabañasId({ params }:Props) {

  const id = Number(params.id);
  const cabañaId: Cabaña = cabañas[id - 1];

  return (
    <Flex w='100%' direction='column' minH='100vh' h='max-content' alignItems='center' mt={{base:HEIGHT_NAVBAR_BASE, md:HEIGHT_NAVBAR_SM}} px={{base:PADDING_WEB_BASE, lg:PADDING_WEB_SM}} gap={4}>
      
      <Flex  w='100%' direction='column' mt={{base:'2rem', lg:'4rem'}}>
        <Title title={cabañaId?.nombre}/>
      </Flex>

      <Flex w='100%' direction='column' gap={2}>
        <Text fontSize={{base:'20px', md:'22px'}} textAlign='center'>{cabañaId?.descripcion}</Text>
        <Flex w='100%' direction='column' justifyContent='center' alignItems='center' gap={2}>
          {cabañaId?.caracteristicas?.map( (caracteristica, index) => (
            <Flex key={index} alignItems='center' justifyContent='center'>
              <Text fontSize={{base:'18px', md:'22px'}}>{caracteristica?.titulo}: {caracteristica?.descripcion}</Text> 
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Flex w='100%' flexWrap={{base:'nowrap', sm:'wrap'}} direction={{base:'column', sm:'row'}} alignItems='center' justifyContent='center' gap={{base:2, sm:1}}>
        { cabañaId?.images?.map((image, index) => <Flex w={{base:'100%', sm:'350px'}} h='400px' bgImage={image} bgRepeat='no-repeat' bgSize='cover' key={index} />) }
      </Flex>

    </Flex>
  );
}
