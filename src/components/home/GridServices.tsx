import Link from 'next/link'
import { Title } from "../ui";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { FaCarSide, FaSwimmingPool } from "react-icons/fa";
import { PiSecurityCameraFill } from "react-icons/pi";
import { TbAirConditioning, TbGrill } from "react-icons/tb";
import { BiSolidLandscape } from "react-icons/bi";

const GridServices = () => {
  return (
    <Flex w='100%' minH={{base:'max-content', md:'100vh'}} h='max-content' direction='column' bgColor='bgColor' justifyContent='space-around' alignItems='center' p={{base:'4% 6%', md:'2% 6%'}} gap={6} id="grid">
        
        <Flex w='100%' direction='column' justifyContent={{base:'center', md:'start'}} alignItems='center'>
            <Text fontSize='24px' color='white' fontWeight='normal'>Explora</Text>
            <Title title='Nuestros Servicios' color='#fff' subtitle='Estos son algunos de los servicios que ofrecemos para que tu estadía sea inolvidable.' colorSubtitle='#fff'/>
        </Flex>

        <Grid templateColumns={{base:"repeat(1, 1fr)", md:"repeat(3, 1fr)"}} gap={{base:4, md:6}}>
            {[ 
                { icon: FaCarSide, text: 'Estacionamiento Propio', description: 'Guarda tu vehículo con total seguridad y comodidad.' },
                { icon: FaSwimmingPool, text: 'Pileta', description: 'Relájate y disfruta de nuestra piscina con calefacción solar.' },
                { icon: PiSecurityCameraFill, text: 'Seguridad', description: 'Cada cabaña cuenta con alarma y cámaras para disfrutar tu estadía con tranquilidad.' },
                { icon: TbAirConditioning, text: 'Ventilación', description: 'Aire acondicionado con ficha en la habitación principal y ventiladores en todos los ambientes.' },
                { icon: TbGrill, text: 'Parrilla y deck exterior', description: 'Todas nuestras cabañas cuentan con parrilla privada. ¡Disfruta de un buen asado!.' },
                { icon: BiSolidLandscape, text: 'Vista a las montañas', description: 'Despierta con vistas espectaculares a las montañas.' }

            ].map((service, index) => (
                <GridItem key={index} w={{base:"300px", md:"350px"}} h={{base:"max-content", md:"250px"}} bgColor="white" boxShadow="md" display='flex' flexDirection='column' justifyContent="space-around" p={{base:'6%', md:'8%'}}
                    borderRadius="md" border="1px solid" borderColor="#ECB176" transition="transform 0.4s ease" // Aplicar la misma transición al salir del hover
                    _hover={{ transform: "scale(1.05)", transition: "transform 0.4s ease" }} gap={1}
                >
                    <Flex w='45px' h='45px'><service.icon size='100%' color="#7A2D2C" /></Flex>
                    <Text fontSize={{base:'20px', md:"24px"}} color="black" fontWeight='bold'>{service.text}</Text>
                    <Text fontSize={{base:'14px', md:"16px"}} color="black" fontStyle="italic">{service.description}</Text>
                    <Link href="/servicios">
                        <Text fontSize={{base:'13px', md:'14px'}} color="primary" fontWeight='bold' textDecoration='underline'>Ver más</Text>
                    </Link>
                </GridItem>
            ))}
        </Grid>

    </Flex>
  )
}

export default GridServices;
