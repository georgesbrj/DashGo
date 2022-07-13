import { FormControl, FormErrorMessage, FormLabel,Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import {forwardRef,ForwardRefRenderFunction} from 'react';
import {FieldError } from 'react-hook-form';

interface IputProps  extends ChakraInputProps{
    name: string;
    label?: string;
    error?: FieldError;
}


 const InputBase: ForwardRefRenderFunction<HTMLInputElement,IputProps> 
    = ({name,label,error = null, ...rest},ref) => {
    return(
        <FormControl isInvalid={!!error}>
           { !!label && <FormLabel  htmlFor={name}>{label}</FormLabel>}
           
            <ChakraInput 
                id={name}
                name={name} 
                type="email"  
                focusBorderColor="purple.500"
                background="gray.900"
                variant="filled"
                _hover={{
                    bgCollor: 'gray.900'
                }}
                size="lg"
                {...rest} 
                ref={ref}               
                />

               {!!error && (
                    <FormErrorMessage>
                        {error.message}
                    </FormErrorMessage>
               )}
      </FormControl>

    );
}


export const Input = forwardRef(InputBase);