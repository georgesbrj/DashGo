import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}


export function Profile({showProfileData = true}:ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData  && (
        <Box marginRight="4" textAlign="right">
          <Text>George Bezerra </Text>
          <Text color="gray.300" fontSize="small">
            george_463@hotmail.com
          </Text>
      </Box>
      ) }
      <Avatar
        size="md"
        name="George Bezerra"
        src='https://github.com/georgesbrj.png'
      />
    </Flex>
  );
}