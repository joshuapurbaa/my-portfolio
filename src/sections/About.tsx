import { Container, Typography, Box, Grid, Chip } from "@mui/material";

export default function About() {
  const stackSkills = [
    { name: "Web Design", color: "#667eea" },
    { name: "UI/UX Expertise", color: "#f093fb" },
    { name: "HTML/CSS", color: "#4ecdc4" },
    { name: "Effective Team Player", color: "#45b7d1" },
    { name: "JavaScript Proficiency", color: "#96ceb4" },
    { name: "Problem Solving", color: "#ffeaa7" },
    { name: "Keeping Abreast of Trends", color: "#fd79a8" }
  ];

  return (
    <section id="about" className="section-container">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            fontWeight: 700,
            marginBottom: '16px',
            color: '#333'
          }}
        >
          About me<span style={{ color: '#667eea' }}>.</span>
        </Typography>

        <Box sx={{ marginBottom: '48px' }}>
          <Box
            sx={{
              borderLeft: '4px solid #667eea',
              paddingLeft: '24px',
              marginBottom: '32px'
            }}
          >
            <Typography 
              variant="h6" 
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: '#666',
                fontWeight: 400
              }}
            >
              Developing beautiful and functional websites is what I love doing, and that's why I give my all in every new challenge.
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className="about-card">
              <Typography 
                variant="h4" 
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#333'
                }}
              >
                My Stack.
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {stackSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill.name}
                    sx={{
                      backgroundColor: skill.color,
                      color: 'white',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      padding: '8px 4px',
                      height: 'auto',
                      '& .MuiChip-label': {
                        padding: '8px 12px',
                      },
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="about-card">
              <Typography 
                variant="h4" 
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#333'
                }}
              >
                My Special Place.
              </Typography>
              
              <Box
                sx={{
                  width: '100%',
                  height: '300px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 500,
                      fontSize: '1.1rem'
                    }}
                  >
                    🌍 Jakarta, Indonesia
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginTop: '8px'
                    }}
                  >
                    Where creativity meets innovation
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
