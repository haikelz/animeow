import { Text, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FilteredDataAnime } from "src/interfaces";
import Link from "next/link";
import Image from "next/image";

type Bg = string | string;

const ListAnimeCard = ({ filteredData }: FilteredDataAnime) => {
  const bg: Bg = useColorModeValue("twitter.300", "gray.700");
  const bgHover: Bg = useColorModeValue("twitter.400", "twitter.600");

  return (
    <>
      {filteredData.map((animeList) => (
        <Link href={`/anime/detail/${animeList.mal_id}`} key={animeList.mal_id}>
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
              src={animeList.images.webp.image_url}
              alt={animeList.mal_id}
              width="200px"
              height="250px"
            />
            <Box px="4" py="2.5">
              <Flex alignItems="center" gap="2">
                <StarIcon color="yellow.500" />
                <Text fontWeight="semibold">{animeList.score}</Text>
              </Flex>
              <Text mt="3" fontWeight="bold" fontSize="lg">
                Rank {animeList.rank}
              </Text>
              <Text fontWeight="bold" fontSize="2xl">
                {animeList.title}
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                {`${
                  animeList.season == null
                    ? ""
                    : animeList.season.charAt(0).toUpperCase() +
                      `${animeList.season}`.slice(1)
                }`}
                {animeList.year && `, ${animeList.year}`}
              </Text>
              <Text mt="2" fontWeight="semibold">
                {animeList.episodes} Episode
              </Text>
            </Box>
          </Flex>
        </Link>
      ))}
    </>
  );
};

export default ListAnimeCard;
