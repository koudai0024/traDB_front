import "src/styles/reset.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#18181B",
  },
};

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
