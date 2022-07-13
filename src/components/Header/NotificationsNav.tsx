import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserLine } from "react-icons/ri";

export function NotificationsNav(){
    return(
        <HStack 
        spacing={["6","8"]}
        marginX={["6","8"]}
        paddingRight={["6","8"]}
        paddingY="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserLine} fontSize="20"  />
      </HStack>
    );
}