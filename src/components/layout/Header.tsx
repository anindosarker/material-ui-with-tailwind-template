"use client";
import { Box, Button, Divider, Typography } from "@mui/material";
// import DropDownAvatar from "../common/DropDownAvatar";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <Box
        px={2}
        py={2}
        display={"flex"}
        alignItems={"center"}
        gap={1}
        justifyContent={"space-between"}
      >
        <Box
          sx={{
            display: {
              xs: "flex",
            },
            alignItems: "center",
            gap: 1,
          }}
        >
          <Image src="/favicon.ico" height={35} width={35} alt="logo" />
          <Typography fontWeight={800}>App Title.</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button variant="contained">Profile</Button>
          <BurgerMenu />
        </Box>
      </Box>
      <Divider sx={{ mt: "auto" }} />
    </>
  );
}
