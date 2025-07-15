import { Container, Typography, Box, Grid } from "@mui/material";

const educationData = {
  institution: "Universitas Teknokrat Indonesia",
  degree: "Business Management",
  period: "2018 - 2022",
  gpa: "3.75",
  description: "Graduated with excellent academic performance, focusing on business strategy, management principles, and organizational behavior."
};

export default function Education() {
  return (
    <section id="education" className="section-container">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            fontWeight: 700,
            marginBottom: '48px',
            color: '#333'
          }}
        >
          Education<span style={{ color: '#667eea' }}>.</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(102, 126, 234, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                }
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: '#667eea',
                    marginBottom: '16px',
                    fontSize: '1.8rem'
                  }}
                >
                  {educationData.institution}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    color: '#333',
                    marginBottom: '12px',
                    fontSize: '1.3rem'
                  }}
                >
                  {educationData.degree}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#888',
                    marginBottom: '16px',
                    fontSize: '1rem'
                  }}
                >
                  {educationData.period}
                </Typography>

                <Box
                  sx={{
                    display: 'inline-block',
                    background: 'rgba(102, 126, 234, 0.1)',
                    padding: '8px 20px',
                    borderRadius: '25px',
                    marginBottom: '24px',
                    border: '1px solid rgba(102, 126, 234, 0.2)'
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#667eea',
                      fontWeight: 600,
                      fontSize: '1.1rem'
                    }}
                  >
                    GPA: {educationData.gpa}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.6,
                    fontSize: '1rem',
                    fontStyle: 'italic'
                  }}
                >
                  {educationData.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
} 