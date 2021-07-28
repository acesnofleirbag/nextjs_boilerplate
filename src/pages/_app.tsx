import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./../styles/theme";

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
