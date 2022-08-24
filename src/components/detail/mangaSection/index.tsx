import { DetailManga } from "src/interfaces";
import { Flex, Text, Heading, Image, Box } from "@chakra-ui/react";

const DetailMangaSection = ({ data }: DetailManga) => {
  return (
    <Flex justify="center" alignItems="center" flexDir="column">
      <Heading textAlign="center">{data.title}</Heading>
      <Text textAlign="center" mt="2" fontWeight="bold">
        {data.title_japanese}
      </Text>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justify="center"
        mt="10"
        gap="6"
      >
        <Image
          src={data.images.webp.large_image_url}
          alt={data.title}
          rounded="lg"
        />
        <Box w={{ base: "100%", lg: "40%" }}>
          <Text fontSize="xl" fontWeight="semibold">
            {data.chapters && `Chapters: ${data.chapters}`}
          </Text>
          <Text fontSize="xl" fontWeight="semibold">
            {data.volumes && `Volumes: ${data.volumes}`}
          </Text>
          <Text fontSize="xl" fontWeight="semibold">
            Status: {data.status}
          </Text>
          <Text
            mt="3"
            textAlign="justify"
            fontWeight="medium"
            fontSize="lg"
            letterSpacing="wide"
          >
            <b>Synopsis: </b>
            {data.synopsis.replace("[Written by MAL Rewrite]", "")}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DetailMangaSection;
