import { Container, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Container id="about" sx={{ paddingTop: 10, display: "flex" }}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          Hello, I'm Yoshua Purba, a Mobile Developer with over 3 years of
          experience. I specialize in the Flutter framework and have expertise
          in developing mobile applications for Android and iOS devices for 2
          years. Additionally, I have experience in web development using React
          and Next.js.
        </Typography>

        <Typography variant="body1">
          I graduated from the Universitas Teknokrat Indonesia with a degree in
          Bussiness Management in 2018 with a GPA of 3.72.
        </Typography>
      </Box>
    </Container>
  );
}
