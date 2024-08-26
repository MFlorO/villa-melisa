import { Flex, FormLabel, Input, InputGroup } from "@chakra-ui/react"

interface Props {
  label: string,
  id: string,
  type: string,
  register: any,
  errors: any
}

const InputForm = ({ label, id, type, register, errors  }: Props) => {
  return (
    <Flex w='100%' direction='column'>
      <InputGroup>
        <Input 
          w='100%' h={{base:'38px', sm:'45px'}} color='black' fontSize={{base:'11px', sm:'15px'}} variant='outline'  
          id={id} type={type} placeholder={label} {...register} errorBorderColor='red' 
        />
      </InputGroup>
      <Flex color='red' fontFamily='Montserrat' fontSize={{base:'12px', sm:'14px'}} mt='3px'>{errors[id] && errors[id]?.message}</Flex>
    </Flex>
  )
}

export default InputForm;