"use client";

import React, { useState } from "react";
import { Box, Paper, Grid, Typography, Tabs, Tab } from "@mui/material";
import AddContactForm from "@/components/forms/AddContactForm";

export default function Page() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Add One by One" />
          <Tab label="Upload CSV File" />
        </Tabs>
      </Box>
      {value === 0 && (
        <Paper elevation={3}>
          <Box p={3}>
            {/* Add One by One */}
            <AddContactForm />
          </Box>
        </Paper>
      )}
      {value === 1 && (
        <Paper elevation={3}>
          <Box p={3}>
            <Typography variant="h6">Upload CSV File</Typography>
            {/* Your file upload input goes here */}
          </Box>
        </Paper>
      )}
    </Box>
  );
}
