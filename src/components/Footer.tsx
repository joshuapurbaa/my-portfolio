import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h6" 
            sx={{
              color: 'white',
              fontWeight: 600,
              marginBottom: '8px',
              fontSize: '1.1rem'
            }}
          >
            YoshuaDCZ.
          </Typography>
          <Typography 
            variant="body2" 
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.9rem',
              marginBottom: '16px'
            }}
          >
            Frontend Developer passionate about creating beautiful and functional digital experiences.
          </Typography>
          <Typography 
            variant="body2" 
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.8rem'
            }}
          >
            © {new Date().getFullYear()} Yoshua Purba. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
