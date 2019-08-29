import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  palette: {
    primary: {
      main: "#E71E24",
    },
  },
};
function Theme(props) {
  return <ThemeProvider {...props} theme={theme} />;
}

export default Theme;
