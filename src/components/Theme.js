import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
   box-sizing: border-box;
  }
  body {
    font-family: "Poppins", sans-serif;
  }
	p {
		margin-top: 0;
	}
`;

const theme = {
  palette: {
    primary: {
      main: "#E71E24",
    },
  },
};

const Theme = props => (
  <>
    <GlobalStyle />
    <ThemeProvider {...props} theme={theme} />
  </>
);

export default Theme;
