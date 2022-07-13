import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, Flex, Stack} from '@chakra-ui/react';
import {Input} from '../components/Form/Inputs';
import * as yup from 'yup'; 
import { yupResolver} from '@hookform/resolvers/yup';

type SigInFormData ={
  email: string;
  password:string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail e obrigatório').email('E-mail invalido'),
  password: yup.string().required('Password e obrigatório'),
})


export default function SigIn() {

  const { register,handleSubmit,formState}= useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const {errors} = formState
    
   const handleSignIng: SubmitHandler<SigInFormData> = async (values) => {
      await new Promise(resolve => setTimeout(resolve,2000));
    
    console.log(values)
   }

  return (
    <Flex 
       width="100vw" 
       height="100vh" 
       alignItems="center" 
       justifyContent="center" >
      
      <Flex 
         as="form"
         width="100%"
         maxWidth={360}
         background="gray.800"
         padding={8}
         borderRadius={8}
         flexDirection="column"
         onSubmit={handleSubmit(handleSignIng)}
      >
       <Stack spacing={4}>
 
         <Input 
            name="email" 
            type="email" 
            label='E-mail' 
            {...register('email')} 
            error={errors.email}           
          />
         
         <Input  
           name='password' 
           type="password" 
           label="Senha"   
           {...register('password')}  
           error={errors.password}
           />   
       
       </Stack>
        <Button type="submit" marginTop={6} isLoading={formState.isSubmitting} colorScheme="purple">Entrar</Button>
      </Flex>
    </Flex>
  );
}
