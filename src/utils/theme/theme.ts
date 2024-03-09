"use client";
import { Roboto } from "next/font/google";
import { PaletteOptions, createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const palette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#505CFF",
  },
  secondary: {
    main: "#9700FC",
  },
  // background: {
  //   default: "#121212",
  //   paper: "#121212",
  // },
};

const theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #62369c inset !important;
      }`,
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#0a0908",
          // color: "#fff",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
