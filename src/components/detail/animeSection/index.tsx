import { DetailAnime } from "src/interfaces";
import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";

const DetailAnimeSection = ({ data }: DetailAnime) => {
  return (
    <Flex pb="20" justify="center" alignItems="center" flexDir="column">
      <Heading textAlign="center">{data.title}</Heading>
      <Text textAlign="center" mt="2" fontWeight="bold">
        {data.title_japanese}
      </Text>
      <Flex flexDir={{ base: "column", lg: "row" }} justify="center" mt="10" gap="6">
        <Image src={data.images.webp.large_image_url} alt={data.title} rounded="lg" />
        <Text
          textAlign="justify"
          fontWeight="medium"
          fontSize="lg"
          letterSpacing="wide"
          w={{ base: "full", lg: "40%" }}
        >
          {data.synopsis.replace("[Written by MAL Rewrite]", "")}
        </Text>
      </Flex>
      {data.trailer.embed_url && (
        <Box mt="14" w={{ base: "full", md: "73.2%" }} h={{ base: "250px", md: "500px" }}>
          <Heading mb="3">Trailer</Heading>
          <iframe width="100%" height="100%" src={data.trailer.embed_url} />
        </Box>
      )}
    </Flex>
  );
};

export default DetailAnimeSection;
