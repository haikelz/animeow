import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import DarkModeButton from "../darkModeButton";

const Header = () => {
  const bg: string | string = useColorModeValue("gray.200", "gray.900");

  return (
    <Flex w="full" maxW="full" justify="space-between" px="4" py="2" bg={bg} alignItems="center">
      <Link href="/" passHref>
        <Text
          fontWeight="bold"
          fontSize="3xl"
          bgGradient="linear(to-r, twitter.600, twitter.800)"
          bgClip="text"
          cursor="pointer"
        >
          Animeow
        </Text>
      </Link>
      <DarkModeButton />
    </Flex>
  );
};

export default Header;
