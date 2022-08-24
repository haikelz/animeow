import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import DropdownMenu from "../dropdownMenu";

type Bg = string | string;

const Header = () => {
  const bg: Bg = useColorModeValue("gray.200", "gray.900");

  return (
    <Flex
      w="full"
      maxW="full"
      justify="space-between"
      px="4"
      py="2"
      bg={bg}
      alignItems="center"
    >
      <Link href="/" passHref>
        <Text
          fontWeight="bold"
          cursor="pointer"
          fontSize="3xl"
          bgGradient="linear(to-r, twitter.600, twitter.800)"
          bgClip="text"
        >
          Animeow
        </Text>
      </Link>
      <DropdownMenu />
    </Flex>
  );
};

export default Header;
