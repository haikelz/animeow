import { Stack, Text } from "@chakra-ui/react";
import { NextRouter, useRouter } from "next/router";
import { memo, useEffect } from "react";
import Layout from "src/components/layout";

const NotFoundPage = () => {
  const router: NextRouter = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

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
