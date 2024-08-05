import { Flex } from "@chakra-ui/react";

export default function Cabañas() {

  if (typeof window === 'undefined') {
    // Este código se ejecuta en el servidor, puedes retornar algo específico o null
    return null;
  }
  
  return (
    <Flex w='100%' direction='column' minH='100vh' h='max-content'>
      CABAÑAS
    </Flex>
  );
}
