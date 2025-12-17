import { Container, Grid, Typography, Box } from "@mui/material";

const skillsData = {
  "Mobile Development": [
    "Flutter and Dart",
    "Slicing Design to Flutter Code",
    "State Management (Provider, BLOC)",
    "Firebase (Auth, Firestore, Storage)",
    "API Integration (http, dio, Postman)",
    "Local Storage (SQFLITE & SP)",
    "Publishing App to Playstore and Appstore"
  ],
  "Frontend": [
    "Javascript",
    "Typescript",
    "ReactJS",
    "NextJS",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Material UI"
  ],
  "Backend & Tools": [
    "Node.js",
    "Git, GitHub, GitLab",
    "Postman",
    "Jira, Gather",
    "Github Copilot"
  ],
  "Soft Skills": [
    "Effective communication",
    "Collaboration", 
    "Commitment",
    "Leadership",
    "Problem Solving",
    "Team Player",
    "Clean Architecture, Clean Code"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            fontWeight: 700,
            marginBottom: '48px',
            color: '#f1f5f9'
          }}
        >
          Skills<span style={{ color: '#818cf8' }}>.</span>
        </Typography>

        <Grid container spacing={4}>
          {Object.entries(skillsData).map(([category, skills], index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box className="skills-category">
                <Typography 
                  variant="h5" 
                  sx={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    marginBottom: '20px',
                    color: '#f1f5f9'
                  }}
                >
                  {category}
                </Typography>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <Typography 
                        variant="body1" 
                        sx={{
                          color: '#cbd5e1',
                          padding: '6px 0',
                          fontSize: '0.95rem',
                          lineHeight: 1.5,
                          position: 'relative',
                          paddingLeft: '0px',
                          transition: 'color 0.3s ease',
                          '&:hover': {
                            color: '#818cf8',
                            cursor: 'default'
                          }
                        }}
                      >
                        {skill}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Additional Technical Skills */}
        <Box sx={{ marginTop: '48px' }}>
          <Typography 
            variant="h4" 
            sx={{
              fontSize: '1.8rem',
              fontWeight: 600,
              marginBottom: '24px',
              color: '#f1f5f9',
              textAlign: 'center'
            }}
          >
            Technical Expertise
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            {[
              "Object Oriented Programming",
              "Data Structures and Algorithms", 
              "AI Integration (Gemini)",
              "Clean Architecture"
            ].map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    background: 'rgba(30, 41, 59, 0.6)',
                    borderRadius: '12px',
                    padding: '20px',
                    textAlign: 'center',
                    border: '1px solid rgba(129, 140, 248, 0.1)',
                    transition: 'all 0.3s ease',
                    minHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      background: 'rgba(129, 140, 248, 0.1)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(129, 140, 248, 0.15)',
                    }
                  }}
                >
                  <Typography 
                    variant="body1" 
                    sx={{
                      color: '#f1f5f9',
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }}
                  >
                    {skill}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
