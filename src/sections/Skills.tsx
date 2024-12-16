import { Container, Grid, Typography, Paper } from "@mui/material";

const skills = [
  "Flutter and Dart",
  "Slicing Design to Flutter Code",
  "Object Oriented Programming",
  "Data Structures and Algorithms",
  "Clean Architecture, Clean Code.",
  "Local Storage (SQFLITE & SP)",
  "State Management (Provider, BLOC)",
  "Firebase (Auth, Firestore, Storage)",
  "API Integration (http, dio, Postman)",
  "AI Integration (Gemini)",
  "Git, GitHub, GitLab",
  "Working with team (Jira, Gather)",
  "Working with AI (Github Copilot)",
  "Publishing App to Playstore and Appstore",
];

export default function Skills() {
  return (
    <Container id="skills" sx={{ paddingTop: 10 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="flex-start">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
              style={{
                padding: "16px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "80px",
              }}
            >
              <Typography variant="body1">{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
