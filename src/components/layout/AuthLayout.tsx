"use client";

import { Google } from "@mui/icons-material";
import { Box, Typography, Button, Divider, Grid } from "@mui/material";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
        height: "100vh",
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          xs={12}
          item
          lg={6}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundColor: "background.paper",
              flex: {
                xs: "0 0 auto",
                lg: "1 1 auto",
              },

              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: 550,
                px: 3,

                width: "100%",
              }}
            >
              <div>{children}</div>
              <Divider sx={{ my: 2 }}>
                <Typography>OR</Typography>
              </Divider>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => console.log("Google login")}
                startIcon={<Google />}
              >
                Continue With Google
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={6}
          item
          sx={{
            alignItems: "center",

            background:
              "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            color: "white",
            display: {
              xs: "none",
              lg: "flex",
            },

            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              fontWeight={400}
              variant="h2"
            >
              Welcome to{" "}
              <Link href="/">
                <Box component="span" sx={{ color: "#15B79E" }}>
                  App Title.
                </Box>
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
