import { Portadas, SecondSections, ThirdSections, FourSections } from "@/components/home";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w='100%' direction='column' minH='100vh' h='max-content'>
      <Portadas />
      <SecondSections />
      <ThirdSections />
      <FourSections />
    </Flex>
  );
}
