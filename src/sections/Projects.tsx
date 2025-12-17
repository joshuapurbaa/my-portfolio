import { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Chip,
} from "@mui/material";
import BottomSheetDialog from "../components/BottomSheetDialog";
import { useEffect } from "react";
import { ProjectType } from "../types/project_type";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/json/portfolio_data.json");
      const json = await response.json();
      setProjects(json);
    };

    fetchData();
  }, []);

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const handleOpen = (project: ProjectType) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-container">
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
          Projects<span style={{ color: '#818cf8' }}>.</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects &&
            projects.slice(0, 6).map((project: ProjectType, index: number) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                >
                  <Card
                    sx={{
                      background: 'rgba(30, 41, 59, 0.6)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                      cursor: "pointer",
                      border: '1px solid rgba(129, 140, 248, 0.1)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                      },
                    }}
                    onClick={() => handleOpen(project)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.path[0]}
                      alt={project.name}
                      sx={{ 
                        objectFit: "cover",
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, padding: '24px' }}>
                      <Typography 
                        variant="h5" 
                        component="div"
                        sx={{
                          fontWeight: 600,
                          color: '#f1f5f9',
                          marginBottom: '12px',
                          fontSize: '1.2rem'
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{
                          color: '#cbd5e1',
                          lineHeight: 1.6,
                          marginBottom: '16px',
                          fontSize: '0.9rem'
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Chip
                            key={tagIndex}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(129, 140, 248, 0.1)',
                              color: '#818cf8',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                              border: '1px solid rgba(129, 140, 248, 0.2)',
                              '&:hover': {
                                backgroundColor: 'rgba(129, 140, 248, 0.2)',
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>

        {projects && projects.length > 6 && (
          <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}
            >
              And {projects.length - 6} more projects...
            </Typography>
          </Box>
        )}

        {selectedProject && (
          <BottomSheetDialog
            open={!!selectedProject}
            onClose={handleClose}
            title={selectedProject.name}
            description={selectedProject.description}
            project={selectedProject}
          />
        )}
      </Container>
    </section>
  );
}
