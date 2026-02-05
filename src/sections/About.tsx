import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import DevicesIcon from '@mui/icons-material/Devices';
import GroupsIcon from '@mui/icons-material/Groups';

export default function About() {
  const highlights = [
    {
      title: "Mobile Expert",
      description: "Specialized in Flutter for high-performance ios & android apps",
      icon: <DevicesIcon sx={{ fontSize: 32, color: '#8b5cf6' }} />
    },
    {
      title: "Problem Solver",
      description: "Analytical approach to complex technical challenges",
      icon: <BoltIcon sx={{ fontSize: 32, color: '#ec4899' }} />
    },
    {
      title: "Team Player",
      description: "Experience working in agile cross-functional teams",
      icon: <GroupsIcon sx={{ fontSize: 32, color: '#10b981' }} />
    }
  ];

  return (
    <section id="about" className="section-container">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
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
                I'm a passionate Software Engineer specialized in Mobile Development.
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '32px'
                }}
              >
                With a strong foundation in Flutter and React, I build applications that are not only functional but also deliver exceptional user experiences. I thrive in dynamic environments where I can apply my "Clean Architecture" principles to build scalable software.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {highlights.map((item, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        background: 'rgba(255, 255, 255, 0.05)'
                      }
                    }}
                  >
                    <Box sx={{ 
                      padding: '12px', 
                      background: 'rgba(15, 23, 42, 0.5)', 
                      borderRadius: '10px',
                      display: 'flex'
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: '500px',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Optional: Add a map image or keep the abstract representation */}
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1555899434-94d1368b7bdb?q=80&w=1000&auto=format&fit=crop"
                alt="Workspace"
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.6
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  textAlign: 'center',
                  background: 'rgba(15, 23, 42, 0.7)',
                  padding: '32px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: '8px' }}>
                  Jakarta, ID
                </Typography>
                <Typography variant="body1" sx={{ color: '#cbd5e1' }}>
                  Open to Remote Opportunities Worldwide
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
