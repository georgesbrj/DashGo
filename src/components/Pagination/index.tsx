import { PAginationItem } from "./PaginationItem";
import { Box, Stack } from "@chakra-ui/react";

 

        export function Pagination(){
            return(
              <Stack              
                direction={["column","row"]}
                spacing="6"
                mt="8"
                justify="space-between"
                align="center"              
              >
                <Box>
                    <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
                </Box>

                 <Stack  direction="row" spacing="2" >
                    <PAginationItem number={1} isCurrent />
                    <PAginationItem number={2} isCurrent />
                    <PAginationItem number={3} isCurrent />
                    <PAginationItem number={4} isCurrent />                     
                 </Stack>
              </Stack>
            );
        }
     
 