import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ProjectType } from "../types/project_type";
import ContactButton from "./ContactButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import LinkIcon from "@mui/icons-material/Link";

interface BottomSheetDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  project: ProjectType;
}

const BottomSheetDialog: React.FC<BottomSheetDialogProps> = ({
  open,
  onClose,
  title,
  description,
  project,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      PaperProps={{
        sx: {
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "90%",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          background: "var(--background-lighter)",
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))", // Subtle lift
          color: "var(--text-primary)",
          border: "1px solid var(--glass-border)",
          overflow: "hidden",
        },
      }}
    >
      {/* Tombol Close di bagian atas */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 2,
        }}
      >
        <IconButton onClick={onClose} sx={{ color: "var(--text-secondary)", "&:hover": { color: "var(--text-primary)" } }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Konten Dialog */}
      <DialogContent
        sx={{
          paddingTop: 6, // Beri jarak karena ada tombol di atas
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 4, 
            fontWeight: 800, 
            color: "var(--text-primary)",
            textAlign: 'center',
            background: 'linear-gradient(to right, #fff, #cbd5e1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}
        >
          {title}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {project.path.map((path, index) => (
            <Grid
              item
              key={index}
              sx={{
                height: 500,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={path}
                alt={title}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ width: '100%', maxWidth: '900px', mt: 4, px: { xs: 2, md: 4 } }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: "var(--primary-light)", 
              fontWeight: 600,
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '0.9rem'
            }}
          >
            Description
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "var(--text-primary)",
              mb: 4,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              opacity: 0.9
            }}
          >
            {description}
          </Typography>

          <Typography 
            variant="h6" 
            sx={{ 
              color: "var(--primary-light)", 
              fontWeight: 600,
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '0.9rem'
            }}
          >
            Key Features
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "var(--text-primary)",
              mb: 4,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              opacity: 0.9
            }}
          >
            {project.features}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: { xs: 'center', md: 'flex-start' } }}>
            {project.githubLink && (
              <ContactButton
                icon={<GitHubIcon />}
                text="Github"
                onClick={() => {
                  if (project.githubLink) {
                    window.open(project.githubLink, "_blank");
                  } else {
                    alert("Sorry, the Github link is not available");
                  }
                }}
              />
            )}
            {project.apkLink && (
              <ContactButton
                icon={<DownloadIcon />}
                text="Apk"
                onClick={() => {
                  if (project.apkLink) {
                    window.open(project.apkLink, "_blank");
                  } else {
                    alert("Sorry, the APK link is not available");
                  }
                }}
              />
            )}
            {project.otherLink && (
              <ContactButton
                icon={<LinkIcon />}
                text="Check it out"
                onClick={() => {
                  window.open(project.otherLink, "_blank");
                }}
              />
            )}
            {project.playstoreLink && (
              <ContactButton
                icon={<LinkIcon />}
                text="Playstore"
                onClick={() => {
                  if (project.playstoreLink) {
                    window.open(project.playstoreLink, "_blank");
                  } else {
                    alert("Sorry, the Playstore link is not available");
                  }
                }}
              />
            )}
            {project.appstoreLink && (
              <ContactButton
                icon={<LinkIcon />}
                text="Appstore"
                onClick={() => {
                  if (project.appstoreLink) {
                    window.open(project.appstoreLink, "_blank");
                  } else {
                    alert("Sorry, the Appstore link is not available");
                  }
                }}
              />
            )}
          </Box>
          <Box>
            {project.tags && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                {project.tags.map((tag, index) => (
                  <Typography
                    key={index}
                    sx={{
                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                      color: "var(--primary-light)",
                      borderRadius: "8px",
                      padding: "6px 16px",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                    }}
                  >
                    #{tag}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BottomSheetDialog;
