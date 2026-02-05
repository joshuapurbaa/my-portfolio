import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" sx={{ minHeight: '80vh' }}>
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Box 
                sx={{ 
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  borderRadius: '30px',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  marginBottom: '24px'
                }}
              >
                <Typography
                  sx={{
                    color: '#a78bfa',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px'
                  }}
                >
                  👋 Welcome to my portfolio
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: '24px',
                  background: 'linear-gradient(to right, #fff, #cbd5e1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                I'm Yoshua, <br />
                <span className="gradient-text">Flutter Developer</span>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 400,
                  marginBottom: '40px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  maxWidth: '540px'
                }}
              >
                Based in Jakarta, I craft high-performance mobile applications with beautiful interactions. Specialized in building seamless cross-platform experiences.
              </Typography>

              <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <Button
                    className="modern-button primary"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Get In Touch
                  </Button>
                </ScrollLink>
                
                <Button
                  component="a"
                  href="https://drive.google.com/file/d/1XypzvI5KXP87Lubcp1isQK936DKA9YkK/view?usp=sharing"
                  target="_blank"
                  className="modern-button secondary"
                  startIcon={<DownloadIcon />}
                >
                  Download CV
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <div className="profile-image-container">
                <div className="profile-image-frame"></div>
                <img
                  src="/images/photo-profile.png"
                  alt="Yoshua Purba"
                  className="profile-image"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
