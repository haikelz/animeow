import Layout from "~ui/layout";
import { Stack, Text } from "@chakra-ui/react";
import { memo } from "react";

const NotFoundPage = () => {
  return (
    <Layout title="Not Found">
      <Stack>
        <Text fontWeight="semibold" textAlign="center">
          Sorry, the page that you want to visit is not found
        </Text>
      </Stack>
    </Layout>
  );
};

export default memo(NotFoundPage);
