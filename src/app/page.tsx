import { Portadas, SecondSections, ThirdSections, FourSections } from "@/components/home";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  
  if (typeof window === 'undefined') {
    // Este código se ejecuta en el servidor, puedes retornar algo específico o null
    return null;
  }

  return (
  <Flex w='100%' direction='column' minH='100vh' h='max-content'>
    <Portadas />
    <SecondSections />
    <ThirdSections />
    <FourSections />
  </Flex>
  );
}
