/* eslint-disable react/no-unescaped-entities */
"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { ChevronRight } from "@mui/icons-material";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        height: "100vh",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : "linear-gradient(180deg, rgba(2,41,79,1) 20%, rgba(9,14,16,1) 50%)",
        backgroundRepeat: "no-repeat",
        bgcolor: "#06090a",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Sales&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              Magic
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Discover our innovative dashboard, designed to revolutionize your
            email marketing strategies. We leverage advanced AI technology to
            craft compelling email openers, tailored to your audience's
            preferences and behaviors. <br />
            Elevate your email campaigns with our top-tier features and
            services, and experience the power of AI in driving engagement and
            conversions.
          </Typography>
          <Link href="/auth/login">
            <Button
              variant="contained"
              endIcon={<ChevronRight />}
              color="secondary"
              fullWidth
            >
              Start now
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button
              variant="contained"
              endIcon={<ChevronRight />}
              color="primary"
              fullWidth
            >
              Dashboard
            </Button>
          </Link>
          <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link
              href="/terms-and-conditions"
              className="text-blue-400 underline"
            >
              Terms & Conditions.
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
