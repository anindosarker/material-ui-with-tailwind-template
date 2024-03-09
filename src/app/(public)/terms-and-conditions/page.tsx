import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function TermsAndConditionsPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Terms and Conditions
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Box fontWeight="fontWeightBold" m={1} color="secondary">
            1. Introduction
          </Box>
          Welcome to Our Application. These are our Terms and Conditions. Please
          read them with care.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Box fontWeight="fontWeightBold" m={1} color="secondary">
            2. Definitions
          </Box>
          Application means the software provided by us to offer services
          related to our company, to be used on Apple iOS and Android OS devices
          and any upgrades from time to time and any other software or
          documentation which enables the use of the Application.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Box fontWeight="fontWeightBold" m={1} color="secondary">
            3. Acceptance of Terms
          </Box>
          By using our Application, you are agreeing to these terms. Be sure to
          occasionally check back for updates.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Box fontWeight="fontWeightBold" m={1} color="secondary">
            4. Application Access and Use
          </Box>
          When you download and use our Application, you will not, in any
          circumstance, do anything to harm the services or any other user’s use
          of the service.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Box fontWeight="fontWeightBold" m={1} color="secondary">
            5. User Responsibilities
          </Box>
          You are responsible for all activity that occurs under your account,
          including any activity by unauthorized users.
        </Typography>
      </Box>
    </Container>
  );
}
