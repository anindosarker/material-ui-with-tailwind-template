import { Backdrop, Box, CircularProgress } from "@mui/material";
import React from "react";

export default function LoaderLayout() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
}
