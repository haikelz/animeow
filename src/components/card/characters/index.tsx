import { Flex, Box, Text, useColorModeValue } from "@chakra-ui/react";
import { FilteredDataCharacters } from "src/interfaces";
import Link from "next/link";
import Image from "next/image";

type Bg = string | string;

const ListCharactersCard = ({ filteredData }: FilteredDataCharacters) => {
  const bg: Bg = useColorModeValue("twitter.300", "gray.700");
  const bgHover: Bg = useColorModeValue("twitter.400", "twitter.600");

  return (
    <>
      {filteredData.map((charactersList) => (
        <Link
          href={`/characters/detail/${charactersList.mal_id}`}
          key={charactersList.mal_id}
        >
          <Flex
            bg={bg}
            rounded="md"
            cursor="pointer"
            _hover={{ bg: bgHover }}
            flexDir="column"
            overflow="hidden"
            transition="0.2s ease-in-out"
            w="full"
          >
            <Image
              src={charactersList.images.webp.image_url}
              alt={charactersList.mal_id.toString()}
              width="200px"
              height="250px"
            />
            <Box px="4" py="2.5">
              <Text fontWeight="bold" fontSize="2xl">
                {charactersList.name}
              </Text>
              <Text fontWeight="medium">{charactersList.name_kanji}</Text>
              <Text mt="2" fontWeight="semibold">
                Favorites: {charactersList.favorites}
              </Text>
            </Box>
          </Flex>
        </Link>
      ))}
    </>
  );
};

export default ListCharactersCard;
