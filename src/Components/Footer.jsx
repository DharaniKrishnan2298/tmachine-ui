import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "linear-gradient(to right,blue,purple)",
      color: "white",
      textAlign: "center",
      padding: "10px 0",
      fontSize: "14px"
    }}>
      <Typography variant="body2">
        Terms and Conditions | Privacy Policy | About Us | Refund Policy
      </Typography>
    </Box>
  );
}
