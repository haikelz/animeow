import { Container, Flex, Spinner, Text } from "@chakra-ui/react";
import Head from "next/head";

const Loading = () => {
  return (
    <>
      <Head>
        <title>Loading....</title>
      </Head>
      <Container maxW="full">
        <Flex justify="center" gap="2" alignItems="center" minH="100vh">
          <Text fontWeight="bold" fontSize="3xl">
            Loading
          </Text>
          <Spinner />
        </Flex>
      </Container>
    </>
  );
};

export default Loading;
