import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import DevicesIcon from '@mui/icons-material/Devices';
import GroupsIcon from '@mui/icons-material/Groups';

export default function About() {
  const highlights = [
    {
      title: "Mobile Expert",
      description: "4+ years specializing in Flutter for high-performance apps",
      icon: <DevicesIcon sx={{ fontSize: 32, color: '#8b5cf6' }} />
    },
    {
      title: "Web Developer",
      description: "Building modern responsive apps with React & Next.js",
      icon: <BoltIcon sx={{ fontSize: 32, color: '#ec4899' }} />
    },
    {
      title: "Industry Mentor",
      description: "Experience guiding developers at Alterra Academy",
      icon: <GroupsIcon sx={{ fontSize: 32, color: '#10b981' }} />
    }
  ];

  return (
    <section id="about" className="section-container">
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} lg={10}>
            <Box sx={{ textAlign: { xs: 'left', md: 'center' } }}>
              <Typography 
                variant="h2" 
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  marginBottom: '24px',
                  background: 'linear-gradient(to right, #fff, #cbd5e1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                About Me<span style={{ color: '#8b5cf6' }}>.</span>
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{
                  fontSize: '1.25rem',
                  lineHeight: 1.6,
                  color: '#e2e8f0',
                  fontWeight: 400,
                  marginBottom: '24px'
                }}
              >
                I am a Mobile Developer with over 4 years of experience and a Front-End Developer with a passion for building high-quality digital solutions.
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="body1" 
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginBottom: '16px'
                  }}
                >
                  Specializing in the <strong>Flutter framework</strong>, I build high-quality mobile applications for both Android and iOS. My expertise covers the full development lifecycle—from slicing designs into responsive UIs to implementing clean architecture, managing state with Provider/BLoC, and deploying to the Play Store and App Store.
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginBottom: '16px'
                  }}
                >
                  I also bring 1 year of experience as a <strong>Front-End Developer</strong>, using React and Next.js to build modern, responsive, and performant web applications with scalable architectures and reusable components.
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginBottom: '16px'
                  }}
                >
                  I've contributed to impactful projects across energy, banking, and trade, including <strong>PLN Click</strong>, <strong>Barista PLN</strong>, <strong>COLOK.IN</strong>, <strong>Bank Raya</strong>, and <strong>Nusa Match</strong>.
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                    marginBottom: '16px'
                  }}
                >
                  My toolkit includes <strong>Firebase</strong>, <strong>AI integration</strong>, and <strong>Agile methodologies</strong>. Beyond coding, I've mentored at <strong>Alterra Academy</strong>, helping aspiring developers build real-world applications.
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: '#8b5cf6',
                    fontWeight: 500,
                    fontStyle: 'italic'
                  }}
                >
                  "Always eager to learn and innovate, I am passionate about creating technology that solves real-world problems while delivering exceptional user experiences."
                </Typography>
              </Box>

              <Box 
                sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
                  gap: '20px',
                  mt: 4
                }}
              >
                {highlights.map((item, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      padding: '24px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: { xs: 'flex-start', md: 'center' },
                      textAlign: { xs: 'left', md: 'center' },
                      gap: '16px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderColor: 'rgba(139, 92, 246, 0.3)',
                        boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.2)'
                      }
                    }}
                  >
                    <Box sx={{ 
                      padding: '16px', 
                      background: 'rgba(139, 92, 246, 0.1)', 
                      borderRadius: '12px',
                      display: 'flex',
                      color: '#8b5cf6'
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600, color: '#f1f5f9', mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
