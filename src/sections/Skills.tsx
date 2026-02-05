import { Container, Grid, Typography, Box, Paper, Chip } from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import terminalIcon from '@mui/icons-material/Terminal';
import GroupIcon from '@mui/icons-material/Group';

const skillsData = [
  {
    category: "Mobile Development",
    icon: <AutoAwesomeIcon sx={{ color: '#ec4899' }} />,
    skills: [
      "Flutter & Dart",
      "State Management (BLoC, Provider)",
      "Clean Architecture",
      "Method Channels",
      "Offline Storage (Hive, Sqflite)",
      "CI/CD for Mobile",
      "App Store & Play Store Deployment"
    ]
  },
  {
    category: "Frontend & Web",
    icon: <CodeIcon sx={{ color: '#8b5cf6' }} />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Material UI",
      "Responsive Design",
      "Performance Optimization"
    ]
  },
  {
    category: "Backend & Tools",
    icon: <StorageIcon sx={{ color: '#10b981' }} />,
    skills: [
      "Node.js",
      "Firebase Suite",
      "RESTful APIs",
      "Git & GitHub Flow",
      "Postman",
      "Jira / Linear",
      "Docker (Basic)"
    ]
  },
  {
    category: "Soft Skills",
    icon: <GroupIcon sx={{ color: '#f59e0b' }} />,
    skills: [
      "Technical Mentoring",
      "System Design",
      "Code Review",
      "Agile/Scrum",
      "Problem Solving",
      "Cross-functional Communication"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            marginBottom: '60px',
            textAlign: 'center',
            background: 'linear-gradient(to right, #fff, #cbd5e1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Technical Arsenal<span style={{ color: '#8b5cf6' }}>.</span>
        </Typography>

        <Grid container spacing={4}>
          {skillsData.map((category, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  padding: '32px',
                  borderRadius: '24px',
                  height: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    background: 'rgba(30, 41, 59, 0.6)',
                    borderColor: 'rgba(139, 92, 246, 0.2)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                {/* Decorative background gradient */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    transform: 'translate(30%, -30%)'
                  }}
                />

                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                  <Box
                    sx={{
                      padding: '12px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#f8fafc',
                      fontFamily: 'Outfit, sans-serif'
                    }}
                  >
                    {category.category}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        color: '#cbd5e1',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        fontSize: '0.9rem',
                        height: '32px',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(139, 92, 246, 0.1)',
                          borderColor: 'rgba(139, 92, 246, 0.3)',
                          color: '#f8fafc',
                          transform: 'translateY(-1px)'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
