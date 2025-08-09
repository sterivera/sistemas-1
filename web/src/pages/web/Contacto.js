 import React from 'react';
import { Heading } from '@chakra-ui/react';

export function Contacto() {
     return (
        <div>
           <Heading>Hola pagina de contacto</Heading>
       </div>
    );
 }


// import React from 'react';
// import { ChakraProvider, Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

// export function Contacto() {
//     return (
// <ChakraProvider>
//       <Box maxW="500px" mx="auto" mt="10" p="6" borderWidth="1px" borderRadius="lg" boxShadow="md">
//         <Heading mb="6" color="teal.500" textAlign="center">Contacto</Heading>

//         <form>
//           <FormControl mb="4" isRequired>
//             <FormLabel>Nombre</FormLabel>
//             <Input placeholder="Ingresa tu nombre" />
//           </FormControl>

//           <FormControl mb="4" isRequired>
//             <FormLabel>Correo Electrónico</FormLabel>
//             <Input type="email" placeholder="correo@ejemplo.com" />
//           </FormControl>

//           <FormControl mb="4" isRequired>
//             <FormLabel>Mensaje</FormLabel>
//             <Textarea placeholder="Escribe tu mensaje aquí..." rows={5} />
//           </FormControl>

//           <Button colorScheme="teal" type="submit" width="full">Enviar</Button>
//         </form>
//       </Box>
//     </ChakraProvider>
//     );
// }
