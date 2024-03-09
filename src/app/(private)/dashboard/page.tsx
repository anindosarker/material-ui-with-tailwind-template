import { Box } from "@mui/material";

export default async function page() {
  return (
    <>
      <Box
        bgcolor={"secondary.main"}
        display={"flex"}
        flexDirection={"column"}
        px={2}
        py={1}
        borderRadius={2}
      >
        <div>Dashboard page</div>
      </Box>
    </>
  );
}
