import { Typography, Box } from "@mui/material";

export default function Lessons() {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
        Learning Page
      </Typography>
      <Typography variant="body1">
        This page will contain detailed lessons.
      </Typography>
    </Box>
  );
}
