import Link from 'next/link'
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { FaCarSide, FaSwimmingPool } from "react-icons/fa";
import { PiSecurityCameraFill } from "react-icons/pi";
import { TbAirConditioning, TbGrill } from "react-icons/tb";
import { BiSolidLandscape } from "react-icons/bi";

const GridServices = () => {
  return (
    <Flex w='100%' h={{base:'max-content', sm:'100vh'}} direction='column' bgColor='#FED8B1' justifyContent='space-between' alignItems='center' p='4% 6%' gap={6} id="grid">
        
        <Flex w='100%' direction='column' justifyContent={{base:'center', sm:'start'}} alignItems='center' gap={1}>
            <Text fontSize='14px' color='#6F4E37' fontWeight='normal'>Explora</Text>
            <Text fontSize='18px' color='#6F4E37' fontWeight='bold'>Nuestros Servicios</Text>
            <Text fontSize='16px' color='#6F4E37' fontStyle='italic' textAlign={{base:'center', sm:'start'}}>Estos son algunos de los servicios que ofrecemos para que tu estadía sea inolvidable.</Text>
        </Flex>

        <Grid templateColumns={{base:"repeat(1, 1fr)", sm:"repeat(3, 1fr)"}} gap={6}>
            {[ 
                { icon: FaCarSide, text: 'Cochera Propia', description: 'Guarda tu vehículo con total seguridad y comodidad.' },
                { icon: FaSwimmingPool, text: 'Pileta', description: 'Relájate y disfruta de nuestra piscina durante todo el año.' },
                { icon: PiSecurityCameraFill, text: 'Seguridad', description: 'Cada cabaña cuenta con alarma y cámaras para disfrutar tu estadía con tranquilidad.' },
                { icon: TbAirConditioning, text: 'Ventilación', description: 'Aire acondicionado y ventilados para ambientes frescos y ventilados.' },
                { icon: TbGrill, text: 'Parrilla', description: 'Disfruta de un buen asado en nuestro espacio de parrillas.' },
                { icon: BiSolidLandscape, text: 'Vista a las montañas', description: 'Despierta con vistas espectaculares a las montañas.' }

            ].map((service, index) => (
                <GridItem
                    key={index}
                    w={{base:"280px", sm:"350px"}}
                    h={{base:"180px", sm:"250px"}}
                    p={4}
                    bgColor="white"
                    boxShadow="md"
                    borderRadius="md"
                    border="1px solid"
                    borderColor="#ECB176"
                    _hover={{
                        transform: "scale(1.05)",
                        transition: "transform 0.4s ease", // Cambiado a 'ease' para una transición más suave
                    }}
                    transition="transform 0.4s ease" // Aplicar la misma transición al salir del hover
                >
                    <Flex direction="column" justifyContent="space-around" h="100%" p='3%' gap={4}>
                        <service.icon size={55} color="#F88800" />
                        <Text fontSize="20px" color="#6F4E37" fontWeight='bold'>{service.text}</Text>
                        <Text fontSize="13px" color="#6F4E37" fontStyle="italic">{service.description}</Text>
                        <Link href="/servicios">
                            <Text fontSize='12px' color="#6F4E37" fontWeight='bold' textDecoration='underline'>Ver más</Text>
                        </Link>
                    </Flex>
                </GridItem>
            ))}
        </Grid>

    </Flex>
  )
}

export default GridServices;
