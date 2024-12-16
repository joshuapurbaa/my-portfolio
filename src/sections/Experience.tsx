import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardContent,
  ListItemIcon,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const cardStyle = { flex: 1, display: "flex" };
const listItemIconStyle = { minWidth: 30, marginRight: 1, marginLeft: -3 };

const experiences = [
  {
    company: "Bank Raya",
    period: "Aug 2024 - Current",
    role: "Frontend Developer (Flutter, NextJs)",
    tasks: [
      "Expanding Features in Current Mobile Applications (Flutter) and Webview (NextJs)",
      "Mobile Apps: Bank Raya",
    ],
  },
  {
    company: "PT. PLN Icon Plus",
    period: "Feb 2023 - Aug 2024",
    role: "Flutter Developer",
    tasks: [
      "Implementing New Features for Existing Mobile Apps",
      "Fixing Bugs and Enhancement",
      "Mobile Apps: PLN Click, Barista PLN, COLOK.IN",
    ],
  },
  {
    company: "Alterra Academy",
    period: "Des 2021 - Feb 2022 and Aug 2022 - Jun 2023",
    role: "Mentor Freelance",
    tasks: [
      "Make learning materials about mobile application development using Flutter and Dart.",
      "Record a video presentation of the material.",
      "Conduct live sessions for the mentee.",
    ],
  },
];

export default function Experience() {
  return (
    <Container id="experience" sx={{ paddingTop: 10 }}>
      <Typography variant="h4" gutterBottom>
        Working Experience
      </Typography>

      <Grid container spacing={4}>
        {experiences.map((exp, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            style={{ display: "flex" }}
          >
            <Card
              style={cardStyle}
              sx={{
                boxShadow: 3,
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              <CardContent style={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "primary.main",
                  }}
                >
                  {exp.company}
                </Typography>
                <Typography variant="subtitle1">{exp.period}</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: "secondary.main",
                  }}
                >
                  {exp.role}
                </Typography>
                <List>
                  {exp.tasks.map((task, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon sx={listItemIconStyle}>
                        <ArrowForwardIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={task} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
