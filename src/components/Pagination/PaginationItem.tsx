import { Button } from "@chakra-ui/react";

interface PagintationItemProps {
    isCurrent?: boolean,
    number: number;
}

export function PAginationItem({isCurrent = false,number}:PagintationItemProps){
   if(isCurrent){
    return(
        <Button 
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="purple"
        disabled
        _disabled={{

            bgColor:'purple.500',
            cursor: 'point'
        }}
        >{number}</Button>     
    );
    
   }

   return(
    <Button 
    size="sm"
    fontSize="xs"
    width="4"
    colorScheme="purple"
    bgColor="purple.700"
    disabled
       _disabled={{
        bgColor:"purple.500",
        cursor: 'point'
       }}
   
    >{number}</Button>
   );
}