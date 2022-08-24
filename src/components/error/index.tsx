import { Flex, Container, Text } from "@chakra-ui/react";
import Head from "next/head";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Error!</title>
      </Head>
      <Container maxW="full">
        <Flex justify="center" alignItems="center" minH="100vh">
          <Text fontWeight={"bold"} fontSize={"3xl"}>
            Error!
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default ErrorPage;
