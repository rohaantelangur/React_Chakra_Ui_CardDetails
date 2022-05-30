import {
  Button,
  Center,
  FormControl,
  FormLabel,
  GridItem,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  Text,
} from "@chakra-ui/react";
import React from "react";
// import { AiOutlineUserAdd } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa";

import { BsCalendarMonth } from "react-icons/bs";
import {
  AiFillCalendar,
  AiOutlineLock,
  AiOutlineUserAdd,
} from "react-icons/ai";

const Creditcard = (props) => {
const [form, setform] = React.useState({
  username:'',
  no1:'',
  no2:'',
  no3:'',
  no4:'',
  cvv:'',
  month:'',
  year:'',
})


const inputhandle=(e)=>{
  let {name, value} = e.target;
  setform({
    ...form, 
    [name] : value,
  });
}
// console.log(form) 

const savedata=()=>{
props.setdata(form)
}



  return (
    <div style={{ padding: "20px" }}>
      <Text fontSize="2xl">Payment details</Text>

      <FormControl>
        <FormLabel fontSize="xs" pt="5">
          CARDHOLDER NAME
        </FormLabel>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={AiOutlineUserAdd} color="pink.400" />}
          />

          <Input
            variant="flushed"
            focusBorderColor="pink.400"
            type="text"
            placeholder="John Smith"
            onChange={inputhandle}
            name='username'
          />
        </InputGroup>

        <FormLabel fontSize="xs" pt="5">
          CARD NUMBER
        </FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FaCreditCard} color="#F6465F" />}
          />
          <Input
            variant="flushed"
            focusBorderColor="pink.400"
            type="text"
            placeholder="1111"
            onChange={inputhandle}
            name='no1'
            minlength='4'
            maxlength='4'
          />
          <Input
            variant="flushed"
            focusBorderColor="pink.400"
            type="text"
            placeholder="4444"
            onChange={inputhandle}
            name='no2'
          />
          <Input
            variant="flushed"
            focusBorderColor="pink.400"
            type="text"
            placeholder="8888"
            onChange={inputhandle}
            name='no3'
          />
          <Input
            variant="flushed"
            focusBorderColor="pink.400"
            type="text"
            placeholder="9999"
            onChange={inputhandle}
            name='no4'
          />
        </InputGroup>
      </FormControl>

      <Grid templateColumns="repeat(3, 1fr)" columnGap={8} width="100">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel fontSize="xs" pt="5">
              EXPIRY MONTH
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={BsCalendarMonth} color="#F6465F" />}
              />
              <Input
                width="100px"
                variant="flushed"
                focusBorderColor="pink.400"
                type="number"
                placeholder="08"
                onChange={inputhandle}
                name='month'
              />
            </InputGroup>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel fontSize="xs" pt="5">
              EXPIRY YEAR
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={AiFillCalendar} color="#F6465F" />}
              />
              <Input
                width="100px"
                variant="flushed"
                focusBorderColor="pink.400"
                type="number"
                placeholder="2020"
                onChange={inputhandle}
                name='year'
              />
            </InputGroup>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel fontSize="xs" pt="5">
              CVC
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={AiOutlineLock} color="#F6465F" />}
              />
              <Input
                width="100px"
                variant="flushed"
                focusBorderColor="pink.400"
                type="number"
                placeholder="145"
                onChange={inputhandle}
                name='cvv'
              />
            </InputGroup>
          </FormControl>
        </GridItem>
      </Grid>

      <Center mt={"20px"}>
        <Text display={"flex"}>
          Payment amount: &nbsp; <Text color={"#F6465F"}>12 300</Text>
        </Text>
      </Center>

      <Center py={5}>
        <Button
          px={"50px"}
          border="2px"
          borderColor="orange.500"
          backgroundColor={"#F6465F"}
          color={"white"}
          onClick={savedata}
        >
          Pay
        </Button>
      </Center>
    </div>
  );
};

export default Creditcard;
