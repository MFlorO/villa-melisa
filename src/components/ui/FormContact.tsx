"use client"
import { useRef, useState } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";
import { NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID } from "../../../env";
import { useForm } from "react-hook-form";
import InputForm from "./InputForm";
import { Alert, AlertIcon, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

type SubscriptionResult = {
  status: "error" | "success" | "info" | "warning" | "loading";
  message: string;
  onClick?: () => void;
}

const FormContact = () => {

  const [subscriptionResult, setSubscriptionResult] = useState<null | SubscriptionResult>(null);
  const { handleSubmit, register, reset, formState: { errors, isSubmitting } } = useForm();


  const onSubmit = async (values: any) => {
    try {
      // * 1. Convertir el email en minúscula.
      values.user_email = values.user_email.toLowerCase();

      //* 2.Corroborar que existan las variables de entorno.
      if(!NEXT_PUBLIC_SERVICE_ID || !NEXT_PUBLIC_TEMPLATE_ID || !NEXT_PUBLIC_EMAILJS_PUBLIC_KEY){
        setSubscriptionResult({ status: 'error', message: 'Ocurrió un error. Intente mas tarde o comuniquese con nosotros mediante whatsApp' });
        console.log('Error con las variables de entorno al enviar el formulario')
        return
      }

      //* 3.Crear el objeto que `emailjs.send` espera recibir.
      const templateParams = {
        user_name: values.user_name,
        user_email: values.user_email,
        phone: values.phone ? values.phone : "",
        message: values.message,
      };

      //* 4.Enviar el formulario. 
      await emailjs
      .send(NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID, templateParams, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then(
        (result:any) => {
          setSubscriptionResult({ status: 'success', message: 'Formulario enviado con éxito' });
        },
        (error):any => {
          setSubscriptionResult({ status: 'error', message: 'Ocurrió un error' });
          console.log('Error al enviar el formulario:', error)
        }
      );
      
      //* 5.Resetear el formulario.
      reset();
      
    } catch (error) {
      console.error('Error onSubmit:', error);
      setSubscriptionResult({ status: 'error', message: 'Ocurrió un error. Intenta nuevamente más tarde.' });
    }
  }
  

  return (
    <Flex w='100%' h='100vh' id="form-contact">
      <Flex w='100%' h='100%' direction={{ base: 'column', md: 'row' }}>
        <Flex w={{ base: '100%', md: '50%' }} h='100%' direction='column' alignItems='center' p='6% 4%' zIndex={100}>
          <Title title='CONTACTANOS' />
          <Text fontSize={{base:'18px', md:'22px'}} color='black' textAlign='center'>
            Estamos aquí para hacer que tu experiencia en Cabañas Villa Melisa sea inolvidable. 
            Si tienes alguna pregunta o deseas hacer una reserva, no dudes en contactarnos.
          </Text>

          <Flex width='100%' flexDirection='column' onSubmit={handleSubmit(onSubmit)} mt='2rem' gap={4} as="form">

              <InputForm id='user_name' type='text' label='Nombre y Apellido' errors={errors}
                register={register('user_name', {
                  required: "Campo requerido",
                  minLength: { value: 3, message: 'El nombre debe ser mayor a 3 caracteres' }
                })}
              />

              <InputForm id='user_email' type='email' label='Email' errors={errors}
                register={register('user_email', {
                  required: "Debe ser una cuenta de correo electrónico válida.",
                  minLength: { value: 6, message: 'El email debe ser mayor a 6 caracteres' },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Formato de email inválido'
                  }
                })}
              />

              <InputForm id='phone' type='text' label='Teléfono' errors={errors}
                register={register('phone', {
                  minLength: { value: 6, message: 'El teléfono debe ser mayor a 6 caracteres' }
                })}
              />

              <InputForm id='message' type='text' label='Consulta' errors={errors} 
                register={register('message', {
                  required: "Este campo es obligatorio",
                  minLength: { value: 10, message: 'La consulta debe contener más de 10 caracteres' }
                })}
              />

              {/* MENSAJES DE ALERTA */}
              {subscriptionResult && (
                <Alert variant='solid' status={subscriptionResult.status}>
                  <AlertIcon />
                  {subscriptionResult.onClick ? (
                    <Link href="#" onClick={subscriptionResult.onClick} style={{ textDecoration: 'underline' }}>
                      {subscriptionResult.message}. Haz clic aquí para recuperar la contraseña.
                    </Link>
                  ) : (
                    <Text>{subscriptionResult.message}</Text>
                  )}
                </Alert>
              )}

              {/* BOTÓN DEL FORMULARIO */}
              <Flex w='100%' alignItems='center' justifyContent='center'>
                <Button p={{ base: '10px 45px', sm: '15px 70px' }} borderRadius='10px' color='white' bgColor='primary' cursor='pointer'
                  fontSize={{ base: '16px', sm: '18px' }} fontWeight='bold' type='submit'
                  _hover={{ opacity: isSubmitting ? 0.8 : 1 }} _active={{ opacity: 1, boxShadow: 'none' }} transition="opacity 0.5s ease" 
                  isLoading={isSubmitting} isDisabled={isSubmitting}
                >
                  ENVIAR
                </Button>
              </Flex>
              
          </Flex>

        </Flex>
        <Flex w={{ base: '100%', sm: '50%' }} h='100%' bgImage='/portada.jpg' bgSize='cover' bgRepeat='no-repeat' justifyContent='center' alignItems='center' />
      </Flex>
    </Flex>
  )
}

export default FormContact;
