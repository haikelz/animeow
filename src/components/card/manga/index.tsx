import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Highlight,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FilteredDataManga } from "src/interfaces";
import Image from "next/image";
import Link from "next/link";
import reactStringReplace from "react-string-replace";

type Bg = string | string;

const ListMangaCard = ({ filteredData, search }: FilteredDataManga) => {
  const bg: Bg = useColorModeValue("twitter.300", "gray.700");
  const bgHover: Bg = useColorModeValue("twitter.400", "twitter.600");

  return (
    <>
      {filteredData.map((mangaList) => (
        <Link href={`/manga/detail/${mangaList.mal_id}`} key={mangaList.mal_id}>
          <Flex
            shadow="lg"
            bg={bg}
            rounded="md"
            cursor="pointer"
            _hover={{ bg: bgHover }}
            transition="0.2s ease-in-out"
            flexDir="column"
            overflow="hidden"
            w="full"
          >
            <Image
              src={mangaList.images.webp.image_url}
              alt={mangaList.mal_id.toString()}
              width="200px"
              height="250px"
            />
            <Box px="4" py="2.5">
              <Flex alignItems="center" gap="2">
                <StarIcon color="yellow.500" />
                <Text fontWeight="semibold">{mangaList.score}</Text>
              </Flex>
              <Text mt="3" fontWeight="bold" fontSize="lg">
                Rank {mangaList.rank}
              </Text>
              <Text fontWeight="bold" fontSize="2xl">
                {search
                  ? reactStringReplace(
                      mangaList.title,
                      search,
                      (match: string, index: number) => (
                        <Highlight
                          key={index++}
                          query={match}
                          styles={{ px: 0.5, bg: "red.100" }}
                        >
                          {match}
                        </Highlight>
                      )
                    )
                  : mangaList.title}
              </Text>
              <Box mt="1.5">
                <Text fontWeight="medium">
                  {mangaList.chapters &&
                    `Total Chapters: ${mangaList.chapters}`}
                </Text>
                <Text fontWeight="medium">
                  {mangaList.volumes && `Total Volumes: ${mangaList.volumes}`}
                </Text>
                <Text fontWeight="medium">Status: {mangaList.status}</Text>
              </Box>
            </Box>
          </Flex>
        </Link>
      ))}
    </>
  );
};

export default ListMangaCard;
