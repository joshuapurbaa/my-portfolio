import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as ScrollLink } from "react-scroll";

const useStyles = makeStyles(() => ({
  heroContainer: {
    display: "flex",
    height: "70vh",
  },
  leftHeroBox: {
    display: "flex",
    alignItems: "left",
    flexDirection: "column",
    gap: "24px", // Converted from 1.5rem
  },
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginRight: "24px", // Converted from 1.5rem
  },
  nameTitle: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
  subTitle: {},
  rightHero: {
    display: "flex",
    gap: "24px", // Converted from 1.5rem
    flexDirection: "column",
    alignItems: "flex-end",
  },
  buttonHero: {
    display: "flex",
    gap: "24px", // Converted from 1.5rem
    marginTop: "16px", // Add margin to separate buttons from subtitle
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container id="hero" className={classes.heroContainer} style={{}}>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={4}>
          <Box className={classes.leftHeroBox} marginTop={8}>
            <img
              className={classes.profileImage}
              src="src/assets/images/photo-profile.png"
              alt="Yoshua Purba"
            />

            <Typography fontSize={30} className={classes.nameTitle}>
              Hello! I'm Yoshua Purba
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box className={classes.rightHero}>
            <Typography className={classes.subTitle} fontSize={20}>
              A Frontend Developer based in Jakarta, Indonesia.
            </Typography>
            <Box className={classes.buttonHero}>
              <ScrollLink to={"contact"} smooth={true} duration={500}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: "50px", padding: "12px 24px" }}
                >
                  Talk with me
                </Button>
              </ScrollLink>
              <ScrollLink to={"projects"} smooth={true} duration={500}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ borderRadius: "50px", padding: "12px 24px" }}
                >
                  See my work
                </Button>
              </ScrollLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
