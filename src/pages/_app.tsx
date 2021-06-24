import "src/styles/reset.css";

import type { AppProps } from "next/app";
import { theme } from "src/lib/theme";
import { ThemeProvider } from "styled-components";

const App = (props: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <props.Component {...props.pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
