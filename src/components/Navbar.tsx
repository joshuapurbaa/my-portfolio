import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";
import useResponsive from "../hooks/useResponsive";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { isMobile, isTablet } = useResponsive();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  // Updated menu items to match design
  const menuItems = [
    { text: "Home", anchor: "hero" },
    { text: "Projects", anchor: "projects" },
    { text: "About", anchor: "about" },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ padding: '0 !important' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                flexGrow: 1, 
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'white'
              }}
            >
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
              >
                YoshuaPurba.
              </ScrollLink>
            </Typography>

            {(isMobile || isTablet) && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop navigation */}
            {!(isMobile || isTablet) && (
              <div style={{ display: 'flex', gap: '8px' }}>
                {menuItems.map((item) => (
                  <ScrollLink
                    key={item.text}
                    to={item.anchor}
                    smooth={true}
                    duration={500}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button 
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '1rem',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        textTransform: 'none',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&.active': {
                          background: 'rgba(255, 255, 255, 0.2)',
                        }
                      }}
                    >
                      {item.text}
                    </Button>
                  </ScrollLink>
                ))}
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            width: 250,
          }
        }}
      >
        <div style={{ padding: '20px 0' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                onClick={toggleDrawer(false)}
                sx={{ 
                  cursor: "pointer",
                  '&:hover': {
                    background: 'rgba(102, 126, 234, 0.1)',
                  }
                }}
              >
                <ScrollLink
                  to={item.anchor}
                  smooth={true}
                  duration={500}
                  style={{ 
                    width: "100%", 
                    textDecoration: 'none',
                    color: '#333'
                  }}
                >
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: '1rem'
                    }}
                  />
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}
