import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
          <Grid item xs={12} md={7}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  marginBottom: '16px',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                Hey, I'm Yoshua 👋
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: '24px',
                  color: 'white'
                }}
              >
                <span style={{ color: '#a78bfa' }}>Flutter</span><br />
                Developer
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  marginBottom: '32px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  maxWidth: '500px'
                }}
              >
                I'm a Flutter developer based in Jakarta, I'll help you build beautiful mobile applications your users will love.
              </Typography>

              <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <Button
                    className="modern-button primary"
                    sx={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      color: '#667eea',
                      border: 'none',
                      borderRadius: '30px',
                      padding: '12px 28px',
                      fontWeight: 600,
                      fontSize: '1rem',
                      textTransform: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                      }
                    }}
                  >
                    Get In Touch
                  </Button>
                </ScrollLink>
                
                <ScrollLink to="projects" smooth={true} duration={500}>
                  <Button
                    className="modern-button"
                    sx={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '30px',
                      padding: '12px 28px',
                      fontWeight: 600,
                      fontSize: '1rem',
                      textTransform: 'none',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.3)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                      }
                    }}
                  >
                    Browse Projects
                  </Button>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  padding: '8px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src="/images/photo-profile.png"
                  alt="Yoshua Purba"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
