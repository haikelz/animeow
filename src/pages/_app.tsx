import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import Theme from "src/utils/theme";
import type { AppProps } from "next/app";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const newClient = new QueryClient();

  return (
    <QueryClientProvider client={newClient}>
      <ChakraProvider theme={Theme}>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default MyApp;