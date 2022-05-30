import React from "react";
import {
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { RiVisaLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import Styles from "./Form.module.css";

const Form = (props) => {
  return (
    <div>
      <Box
        backgroundColor={"#F6465F"}
        w="400px"
        h="270"
        rounded="14px"
        p={4}
        color="white"
      >
        <Box display={"flex"} flexDirection={"row-reverse"}>
          <Icon as={RiVisaLine} w="100px" h="75px" left="50px" />
        </Box>

        <Box>
          <Icon as={FcSimCardChip} w="80px" h="50px" />
        </Box>

        <Text className={Styles.number} fontWeight={"500"} fontSize={"2xl"}>
          {props.data.no1} {props.data.no2} {props.data.no3} {props.data.no4}
        </Text>

        <HStack spacing="50px" m={"25px"}>
          <Box>
            <Text mb={"3px"} fontSize={"xx-small"}>
              CARD HOLDER
            </Text>
            <Text fontWeight={"300"} fontSize={"medium"}>
            {props.data.username}
            </Text>
          </Box>
          <Box>
            <Text mb={"3px"} fontSize={"xx-small"}>
              Expires
            </Text>
            <Text fontWeight={"300"} fontSize={"medium"}>
              {props.data.month}/{props.data.year}
            </Text>
          </Box>
          <Box>
            <Text mb={"3px"} fontSize={"xx-small"}>
              CVV
            </Text>
            <Text fontWeight={"300"} fontSize={"medium"}>
              {props.data.cvv}
            </Text>
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

export default Form;
