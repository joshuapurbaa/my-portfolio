import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        borderTop: "1px solid #e0e0e0",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Yoshua Purba. All rights reserved.
      </Typography>
    </Box>
  );
}
