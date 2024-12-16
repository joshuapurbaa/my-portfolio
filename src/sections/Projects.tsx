import { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Stack,
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
    <Container id="projects" sx={{ paddingTop: 10 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid2 container spacing={4}>
        {projects &&
          projects.map((project: ProjectType, index: number) => {
            return (
              <Grid2
                key={index}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease-in-out",
                  },
                  width: 260,
                  height: 300,
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => handleOpen(project)}
              >
                <Stack>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.path[0]}
                    alt={project.name}
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }} component={Card}>
                    <Typography variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Stack>
              </Grid2>
            );
          })}
      </Grid2>

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
  );
}
