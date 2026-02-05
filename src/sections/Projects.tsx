import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Chip,
  Skeleton,
} from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import BottomSheetDialog from "../components/BottomSheetDialog";
import { ProjectType } from "../types/project_type";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json/portfolio_data.json");
        const json = await response.json();
        setProjects(json);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

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
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            marginBottom: '48px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            background: 'linear-gradient(to right, #fff, #cbd5e1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <CodeIcon sx={{ fontSize: 'inherit', color: '#a78bfa', opacity: 0.8 }} />
          Featured Projects<span style={{ color: '#8b5cf6' }}>.</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {loading 
            ? Array.from(new Array(3)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Skeleton variant="rectangular" height={300} sx={{ borderRadius: '16px', bgcolor: 'rgba(255,255,255,0.05)' }} />
                </Grid>
              ))
            : projects && projects.slice(0, 6).map((project: ProjectType, index: number) => {
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
                      background: 'rgba(30, 41, 59, 0.4)',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: 'none',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: "pointer",
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                        borderColor: 'rgba(139, 92, 246, 0.3)',
                        background: 'rgba(30, 41, 59, 0.8)',
                      },
                    }}
                    onClick={() => handleOpen(project)}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <CardMedia
                        component="img"
                        height="220"
                        image={project.path[0]}
                        alt={project.name}
                        sx={{ 
                          objectFit: "cover",
                          transition: 'transform 0.5s ease',
                          '&:hover': {
                            transform: 'scale(1.05)'
                          }
                        }}
                      />
                      <Box 
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(to bottom, transparent 60%, rgba(15, 23, 42, 0.8) 100%)',
                          pointerEvents: 'none'
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
                      <Typography 
                        variant="h5" 
                        component="div"
                        sx={{
                          fontWeight: 700,
                          color: '#f8fafc',
                          marginBottom: '12px',
                          fontSize: '1.25rem'
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{
                          color: '#94a3b8',
                          lineHeight: 1.6,
                          marginBottom: '20px',
                          fontSize: '0.95rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Chip
                            key={tagIndex}
                            label={tag}
                            className="tech-chip"
                            size="small"
                          />
                        ))}
                        {project.tags.length > 3 && (
                          <Typography variant="caption" sx={{ color: '#64748b', alignSelf: 'center' }}>
                            +{project.tags.length - 3} more
                          </Typography>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>

        {projects && projects.length > 6 && (
          <Box sx={{ textAlign: 'center', marginTop: '60px' }}>
            <Typography
              variant="body1"
              sx={{
                color: '#94a3b8',
                fontSize: '1rem',
                fontStyle: 'italic',
                opacity: 0.8
              }}
            >
              And {projects.length - 6} more projects in the archive...
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
