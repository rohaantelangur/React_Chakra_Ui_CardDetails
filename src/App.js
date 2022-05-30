import React from 'react';
import "./App.css";
import Form from "./Component/Form";
import Creditcard from "./Component/Creditcard";
import { Container, Flex, Heading, VStack } from "@chakra-ui/react";

function App() {
  const [data, setdata] = React.useState({no1:'1111',no2:'2222',no3:'3333',no4:'4444',username:'Rohaan Telangur',cvv:'988',month:'08',year:'2025'})
  return (
    <>
      <Container maxW="container.lg" p="!0">
        <Flex h="100" py="20">
          <VStack w="full">
            <Heading mt={'100px'}>
              <Form data={data} />
            </Heading>
          </VStack>
          <VStack w="full">
            <Creditcard  setdata={setdata}/>
          </VStack>
        </Flex>
      </Container>
    </>
  );
}

export default App;
