import { Container, Typography, Box, Grid } from "@mui/material";

// Updated experiences with Yoshua Purba's actual work history
const experiences = [
  {
    company: "Bank Raya",
    period: "Aug 2024 - Present",
    role: "Flutter Developer",
    tasks: [
      "Expanding Features in Current Mobile Applications (Flutter) and Webview (NextJS)",
      "Mobile Apps: Bank Raya"
    ],
    highlighted: true
  },
  {
    company: "PT. PLN Icon Plus",
    period: "Feb 2023 - Aug 2024",
    role: "Flutter Developer",
    tasks: [
      "Implementing New Features for Existing Mobile Apps",
      "Fixing Bugs and Enhancement",
      "Apps: PLN Click, Barista PLN, COLOK.IN"
    ],
    highlighted: false
  },
  {
    company: "Alterra Academy",
    period: "Des 2021 - Feb 2022 and Aug 2022 - Jun 2023",
    role: "Mentor Freelance",
    tasks: [
      "Make learning materials about mobile application development using Flutter and Dart.",
      "Record a video presentation of the material.",
      "Conduct live sessions for the mentee."
    ],
    highlighted: false
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
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
          Experience<span style={{ color: '#667eea' }}>.</span>
        </Typography>

        <Grid container spacing={4}>
          {/* Timeline sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: '100px' }}>
              {experiences.map((exp, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '24px',
                    cursor: 'pointer',
                    padding: '16px',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    background: exp.highlighted ? '#667eea' : 'rgba(255, 255, 255, 0.8)',
                    color: exp.highlighted ? 'white' : '#333',
                    '&:hover': {
                      background: exp.highlighted ? '#5a67d8' : 'rgba(102, 126, 234, 0.1)',
                      transform: 'translateX(8px)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: exp.highlighted ? 'white' : '#667eea',
                      marginRight: '16px',
                      flexShrink: 0
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: '1rem',
                        marginBottom: '4px'
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        opacity: 0.8,
                        fontSize: '0.9rem'
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Experience details */}
          <Grid item xs={12} md={8}>
            <Box sx={{ paddingLeft: { md: '32px' } }}>
              {experiences.map((exp, index) => (
                <Box
                  key={index}
                  className="experience-item"
                  sx={{
                    marginBottom: '32px',
                    opacity: exp.highlighted ? 1 : 0.8,
                    transform: exp.highlighted ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Typography
                    variant="h5"
                    className="experience-company"
                    sx={{
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: '#667eea',
                      marginBottom: '8px'
                    }}
                  >
                    {exp.role} @ {exp.company}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    className="experience-period"
                    sx={{
                      color: '#888',
                      fontSize: '0.9rem',
                      marginBottom: '16px'
                    }}
                  >
                    {exp.period}
                  </Typography>

                  <ul className="experience-tasks">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            color: '#666'
                          }}
                        >
                          {task}
                        </Typography>
                      </li>
                    ))}
                  </ul>

                  {exp.highlighted && (
                    <Box
                      sx={{
                        marginTop: '16px',
                        padding: '12px 16px',
                        background: 'rgba(102, 126, 234, 0.1)',
                        borderRadius: '8px',
                        borderLeft: '4px solid #667eea'
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#667eea',
                          fontWeight: 500,
                          fontSize: '0.9rem'
                        }}
                      >
                        Current Position
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
