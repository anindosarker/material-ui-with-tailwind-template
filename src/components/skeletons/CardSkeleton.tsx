import { Box, Card, CardContent, Skeleton } from "@mui/material";

export default function CardSkeleton() {
  return (
    <Card>
      <Box sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rounded" width={120} height={40} />
      </Box>
      <CardContent>
        <Skeleton variant="text" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="rectangular" height={118} />
      </CardContent>
    </Card>
  );
}
