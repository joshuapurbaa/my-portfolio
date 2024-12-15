import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu"; // Pastikan Anda sudah menginstal @mui/icons-material
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/material";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)"); // Cek apakah layar berukuran mobile
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)"); // Cek apakah layar berukuran tablet

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Menu items untuk navigasi
  const menuItems = [
    { text: "About", anchor: "about" },
    { text: "Experience", anchor: "experience" },
    { text: "Skills", anchor: "skills" },
    { text: "Projects", anchor: "projects" },
    { text: "Certificates", anchor: "certificates" },
    { text: "Contact", anchor: "contact" },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              My Portfolio
            </ScrollLink>
          </Typography>
          {(isMobile || isTablet) && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          {/* Menambahkan button untuk versi desktop */}
          {!(isMobile || isTablet) &&
            menuItems.map((item) => (
              <ScrollLink
                key={item.text}
                to={item.anchor}
                smooth={true}
                duration={500}
              >
                <Button color="inherit">{item.text}</Button>
              </ScrollLink>
            ))}
        </Toolbar>
      </AppBar>

      {/* Drawer untuk perangkat kecil di sebelah kanan */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Container sx={{ width: 250 }} role="presentation">
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                onClick={toggleDrawer(false)}
                sx={{ cursor: "pointer" }}
                component={"div"}
              >
                <ScrollLink
                  to={item.anchor}
                  smooth={true}
                  duration={500}
                  style={{ width: "100%" }}
                >
                  <ListItemText primary={item.text} />
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </Container>
      </Drawer>
    </>
  );
}
