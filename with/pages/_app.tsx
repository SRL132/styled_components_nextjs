import { AppProps } from "next/app";
import {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export const theme: DefaultTheme = {
  borderRadius: "10px",
  colors: {
    primary: "green",
    secondary: "black",
  },
};

const GlobalStyle = createGlobalStyle`html{
    box-sizing: border-box;
    background-color: black;
    display: block;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
    padding: 0;
    
}
body {
    background-color: #fafafa;
    min-height: 195vh;
    padding: 1rem;
    margin-top: 0;
    font-family: Verdana;
}
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
