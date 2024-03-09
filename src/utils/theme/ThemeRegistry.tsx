"use client";

import { CssBaseline } from "@mui/material";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import theme from "./theme";
import { Toaster } from "react-hot-toast";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
