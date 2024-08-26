import { Portadas, SecondSections, GridServices, CarrouselSection, ReviewComponents } from "@/components/home";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w='100%' direction='column' minH='100vh' h='max-content' bgColor='rgba(255, 250, 243, 0.347)'>
      <Portadas />
      <SecondSections />
      <GridServices />
      <CarrouselSection />  
      <ReviewComponents />
    </Flex>
  );
}
