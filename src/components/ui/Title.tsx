import { Montserrat } from "next/font/google";
import { Flex, Text } from "@chakra-ui/react"


export const titleFont = Montserrat({ 
  subsets: ["latin"], 
  weight: ['200','600','700'] 
});

interface Props {
  title: string;
  color?: string
  subtitle?: string;
  colorSubtitle?: string;
}


const Title = ({ title, subtitle, color='highlight', colorSubtitle }:Props ) => {
  return (
    <Flex w='100%' direction='column' justifyContent='center' alignItems='center' px='5x'>
      <Text className={titleFont.className} fontWeight={600} fontSize={{base:'28px', sm:'40px'}} color={color} textAlign='center' variant='h2'>{ title }</Text>
      { subtitle && <Text className={titleFont.className} fontWeight={200} fontStyle='italic' textAlign='center' fontSize={{base:'14px', sm:'18px'}} color={colorSubtitle} variant='h3'>{subtitle}</Text> }
    </Flex>
  )
}

export default Title