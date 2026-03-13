import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import DevicesIcon from '@mui/icons-material/Devices';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';

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
                minHeight: '500px',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                gap: '40px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {/* Animated Globe Section - Now separate from text */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Background Glow */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    animation: 'pulse 8s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { transform: 'scale(1)', opacity: 0.4 },
                      '50%': { transform: 'scale(1.3)', opacity: 0.6 },
                    }
                  }}
                />
                
                {/* Primary Rotating Globe */}
                <PublicIcon 
                  sx={{ 
                    fontSize: { xs: '180px', md: '220px' }, 
                    color: 'rgba(139, 92, 246, 0.2)',
                    animation: 'rotate 60s linear infinite',
                    '@keyframes rotate': {
                      from: { transform: 'rotate(0deg)' },
                      to: { transform: 'rotate(360deg)' }
                    }
                  }} 
                />

                {/* Secondary Reverse Rotating Globe for Depth */}
                <PublicIcon 
                  sx={{ 
                    position: 'absolute',
                    fontSize: { xs: '120px', md: '160px' }, 
                    color: 'rgba(236, 72, 153, 0.15)',
                    animation: 'rotateReverse 40s linear infinite',
                    '@keyframes rotateReverse': {
                      from: { transform: 'rotate(0deg)' },
                      to: { transform: 'rotate(-360deg)' }
                    }
                  }} 
                />
              </Box>

              {/* Location Information Section */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '24px 32px',
                  borderRadius: '24px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  width: '100%',
                  maxWidth: '360px'
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 800, 
                    marginBottom: '8px',
                    background: 'linear-gradient(to right, #fff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Jakarta, ID
                </Typography>
                <Typography variant="body1" sx={{ color: '#94a3b8', fontWeight: 500 }}>
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
