import { Box, Text } from "@chakra-ui/react";

type TypeInput = {
  type: string;
};

const NotFoundInput = ({ type }: TypeInput) => {
  return (
    <Box mt="3">
      <Text fontWeight="bold" fontSize="2xl">
        {type} that you search is not found
      </Text>
    </Box>
  );
};

export default NotFoundInput;
