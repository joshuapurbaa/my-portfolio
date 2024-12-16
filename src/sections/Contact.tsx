import { Container, Typography, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DownloadIcon from "@mui/icons-material/GetApp";
import { EmailOutlined } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactButton from "../components/ContactButton";
import useResponsive from "../hooks/useResponsive";

export default function Contact() {
  const { isMobile, isTablet } = useResponsive();
  return (
    <Container
      id="contact"
      maxWidth="lg"
      sx={{ paddingTop: 10, paddingBottom: 10 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Contact
      </Typography>
      <Box
        display="flex"
        flexDirection={isMobile || isTablet ? "column" : "row"}
        alignItems="center"
        gap={2}
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
    </Container>
  );
}
