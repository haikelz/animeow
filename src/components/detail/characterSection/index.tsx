import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { DetailCharacter } from "src/interfaces";

const DetailCharacterSection = ({ data }: DetailCharacter) => {
  return (
    <Flex justify="center" alignItems="center" flexDir="column">
      <Heading textAlign="center">{data.name}</Heading>
      <Text textAlign="center" mt="2" fontWeight="bold">
        {data.name_kanji}
      </Text>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justify="center"
        alignItems={{ base: "center", lg: "normal" }}
        mt="10"
        gap="6"
      >
        <Image
          src={data.images.webp.image_url}
          width={{ base: "full", sm: "300px" }}
          height="300px"
          alt={data.name}
          rounded="lg"
        />
        <Text
          textAlign="justify"
          fontWeight="medium"
          fontSize="lg"
          letterSpacing="wide"
          w={{ base: "100%", lg: "40%" }}
        >
          {data.about}
        </Text>
      </Flex>
    </Flex>
  );
};

export default DetailCharacterSection;
