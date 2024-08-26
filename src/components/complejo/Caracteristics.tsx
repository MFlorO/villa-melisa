import { Flex, Text } from "@chakra-ui/react"

const Caracteristics = () => {
  return (
    <Flex w='100%' direction='column' textAlign='center' fontSize={{base:'18px', md:'22px'}} color='black'>
      <Text>Cabañas de 4 a 6 personas (la mas grande con dos dormitorios y dos baños).</Text>
      <Text>Cocinas (con horno) completamente equipadas con vajilla, microondas, etc.</Text>
      <Text>Direct TV Satelital, Internet WI-FI.</Text>
      <Text>Calefacción, Aire acondicionado con ficha y ventiladores.</Text>
      <Text>Cochera privada para un auto.</Text>
      <Text>Pileta con calefacción solar.</Text>
      <Text>Pet friendly. Aceptamos mascotas pequeñas.</Text>
    </Flex>
  )
}

export default Caracteristics;