import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DownloadIcon from "@mui/icons-material/GetApp";
import { EmailOutlined, Phone, Language } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactButton from "../components/ContactButton";
import useResponsive from "../hooks/useResponsive";

export default function Contact() {
  const { isMobile, isTablet } = useResponsive();
  
  const contactInfo = [
    {
      icon: <Phone />,
      label: "Phone",
      value: "+62 822 8122 1123",
      action: "tel:+6282281221123"
    },
    {
      icon: <Language />,
      label: "Website",
      value: "yoshuapurba.vercel.app",
      action: "https://yoshuapurba.vercel.app/"
    },
    {
      icon: <EmailOutlined />,
      label: "Email",
      value: "yoshuapurba27@gmail.com",
      action: "mailto:yoshuapurba27@gmail.com"
    }
  ];

  return (
    <section id="contact" className="section-container">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          sx={{
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            fontWeight: 700,
            marginBottom: '48px',
            color: '#f1f5f9',
            textAlign: 'center'
          }}
        >
          Contact<span style={{ color: '#818cf8' }}>.</span>
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Box sx={{ marginBottom: '32px' }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#f1f5f9'
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                  fontSize: '1rem'
                }}
              >
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  sx={{
                    background: 'rgba(30, 41, 59, 0.6)',
                    borderRadius: '12px',
                    border: '1px solid rgba(129, 140, 248, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(129, 140, 248, 0.05)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(129, 140, 248, 0.15)',
                    },
                    cursor: 'pointer'
                  }}
                  onClick={() => window.open(contact.action, contact.action.includes('tel:') || contact.action.includes('mailto:') ? '_self' : '_blank')}
                >
                  <CardContent sx={{ padding: '20px !important' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <Box
                        sx={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: 'rgba(129, 140, 248, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#818cf8'
                        }}
                      >
                        {contact.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: '#f1f5f9',
                            fontSize: '1rem',
                            marginBottom: '4px'
                          }}
                        >
                          {contact.label}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#cbd5e1',
                            fontSize: '0.9rem'
                          }}
                        >
                          {contact.value}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>

          {/* Social Links and Actions */}
          <Grid item xs={12} md={6}>
            <Box sx={{ marginBottom: '32px' }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#f1f5f9'
                }}
              >
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                  fontSize: '1rem'
                }}
              >
                Follow me on social media or download my CV to learn more about my experience and skills.
              </Typography>
            </Box>

            <Box 
              sx={{
                display: 'flex',
                flexDirection: isMobile || isTablet ? "column" : "row",
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <ContactButton
                icon={<EmailOutlined />}
                text="Email"
                onClick={() =>
                  (window.location.href = "mailto:yoshuapurba27@gmail.com")
                }
              />
              <ContactButton
                icon={<WhatsAppIcon />}
                text="WhatsApp"
                onClick={() => window.open("https://wa.me/+6282281221123", "_blank")}
              />
              <ContactButton
                icon={<GitHubIcon />}
                text="GitHub"
                onClick={() =>
                  window.open("https://github.com/joshuapurbaa", "_blank")
                }
              />
              <ContactButton
                icon={<LinkedInIcon />}
                text="LinkedIn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/yoshua-purba-7b6056210",
                    "_blank"
                  )
                }
              />
              <ContactButton
                icon={<DownloadIcon />}
                text="Download CV"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1TGV1mIwTbadwpH81QZiWmfA3xPVfWI-d/view?usp=sharing",
                    "_blank"
                  )
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
