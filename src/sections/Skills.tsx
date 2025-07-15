import { Container, Grid, Typography, Box } from "@mui/material";

const skillsData = {
  "Web Design": [
    "UI/UX Design",
    "Responsive Design",
    "Wireframing",
    "User Research"
  ],
  "Frontend": [
    "Javascript",
    "ReactJS",
    "NextJS",
    "CSS3"
  ],
  "Backend": [
    "Node.js",
    "MongoDB",
    "ExpressJS",
    "Vercel"
  ],
  "Soft Skills": [
    "Effective communication",
    "Collaboration",
    "Commitment",
    "Leadership"
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
            color: '#333'
          }}
        >
          Skills<span style={{ color: '#667eea' }}>.</span>
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
                    color: '#333'
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
                          color: '#666',
                          padding: '6px 0',
                          fontSize: '0.95rem',
                          lineHeight: 1.5,
                          position: 'relative',
                          paddingLeft: '0px',
                          transition: 'color 0.3s ease',
                          '&:hover': {
                            color: '#667eea',
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

        {/* Additional Flutter/Mobile Skills Section */}
        <Box sx={{ marginTop: '48px' }}>
          <Typography 
            variant="h4" 
            sx={{
              fontSize: '1.8rem',
              fontWeight: 600,
              marginBottom: '24px',
              color: '#333',
              textAlign: 'center'
            }}
          >
            Mobile Development Expertise
          </Typography>
          
          <Grid container spacing={3}>
            {[
              "Flutter and Dart",
              "Slicing Design to Flutter Code",
              "Object Oriented Programming",
              "Data Structures and Algorithms",
              "Clean Architecture, Clean Code",
              "Local Storage (SQFLITE & SP)",
              "State Management (Provider, BLOC)",
              "Firebase (Auth, Firestore, Storage)",
              "API Integration (http, dio, Postman)",
              "AI Integration (Gemini)",
              "Git, GitHub, GitLab",
              "Working with team (Jira, Gather)",
              "Working with AI (Github Copilot)",
              "Publishing App to Playstore and Appstore"
            ].map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '12px',
                    padding: '16px',
                    textAlign: 'center',
                    border: '1px solid rgba(102, 126, 234, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(102, 126, 234, 0.1)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.15)',
                    }
                  }}
                >
                  <Typography 
                    variant="body1" 
                    sx={{
                      color: '#333',
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
