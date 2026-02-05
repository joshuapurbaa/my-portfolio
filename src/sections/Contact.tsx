import { Container, Typography, Box, Grid, Paper, IconButton, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { EmailOutlined, Phone, Language } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  const contactInfo = [
    {
      icon: <EmailOutlined />,
      label: "Email",
      value: "yoshuapurba27@gmail.com",
      action: "mailto:yoshuapurba27@gmail.com",
      color: "#ef4444"
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: "+62 822 8122 1123",
      action: "tel:+6282281221123",
      color: "#22c55e"
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      value: "Yoshua Purba",
      action: "https://www.linkedin.com/in/yoshua-purba-7b6056210",
      color: "#0ea5e9"
    }
  ];

  return (
    <section id="contact" className="section-container">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: '60px' }}>
          <Typography 
            variant="h2" 
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              marginBottom: '16px',
              background: 'linear-gradient(to right, #fff, #cbd5e1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Work Together<span style={{ color: '#8b5cf6' }}>.</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            I'm currently available for freelance projects and full-time roles. 
            Have a project in mind? Let's turn your idea into reality.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '24px' }}>
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  onClick={() => window.open(info.action, '_blank')}
                  sx={{
                    background: 'rgba(30, 41, 59, 0.4)',
                    padding: '24px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      background: 'rgba(30, 41, 59, 0.6)',
                      borderColor: 'rgba(139, 92, 246, 0.2)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: `rgba(${info.color === '#ef4444' ? '239, 68, 68' : info.color === '#22c55e' ? '34, 197, 94' : '14, 165, 233'}, 0.1)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: info.color
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'var(--text-secondary)',
                        fontSize: '0.875rem'
                      }}
                    >
                      {info.label}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#f8fafc',
                        fontSize: '1rem',
                        fontWeight: 600
                      }}
                    >
                      {info.value}
                    </Typography>
                  </Box>
                </Paper>
              ))}

              {/* Social Actions */}
              <Paper
                elevation={0}
                sx={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(139, 92, 246, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <Typography variant="h6" sx={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 600 }}>
                  Other Platforms
                </Typography>
                <Box sx={{ display: 'flex', gap: '16px' }}>
                  <IconButton 
                    onClick={() => window.open("https://github.com/joshuapurbaa", "_blank")}
                    sx={{ 
                      color: '#cbd5e1', 
                      background: 'rgba(255,255,255,0.05)',
                      '&:hover': { background: 'rgba(255,255,255,0.1)', color: 'white' }
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => window.open("https://yoshuapurba.vercel.app/", "_blank")}
                    sx={{ 
                      color: '#cbd5e1', 
                      background: 'rgba(255,255,255,0.05)',
                      '&:hover': { background: 'rgba(255,255,255,0.1)', color: 'white' }
                    }}
                  >
                    <Language />
                  </IconButton>
                  <IconButton 
                    onClick={() => window.open("https://wa.me/+6282281221123", "_blank")}
                    sx={{ 
                      color: '#cbd5e1', 
                      background: 'rgba(255,255,255,0.05)',
                      '&:hover': { background: 'rgba(255,255,255,0.1)', color: 'white' }
                    }}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Box>
            
            <Box sx={{ textAlign: 'center', marginTop: '48px' }}>
                <Button
                  className="modern-button primary"
                  endIcon={<SendIcon />}
                  component="a"
                  href="mailto:yoshuapurba27@gmail.com"
                  sx={{ padding: '16px 48px !important', fontSize: '1.1rem !important' }}
                >
                  Say Hello
                </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
