import { ChildrenProps } from "~interfaces";
import Header from "~sections/Header";
import { BackToTop } from "~ui/buttons";
import { Box, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useRef } from "react";

const Layout = ({ children, title }: ChildrenProps) => {
  const ref = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex flexDir="column" justify="center" alignItems="center" w="full" ref={ref}>
        <Flex w="full" alignItems="center" flexDir="column" minH="100vh">
          <Header />
          <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            py="6"
            maxW={{ base: "97%", md: "90%" }}
          >
            {children}
          </Container>
          <Box display={{ base: "none", lg: "inline" }} bottom="4" right="4" position="fixed">
            <BackToTop linkRef={ref} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;
