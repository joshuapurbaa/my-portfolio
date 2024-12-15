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
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
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
        <IconButton onClick={onClose}>
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
        <Typography variant="h4" sx={{ mb: 2 }}>
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
                src={`src/${path}`}
                alt={title}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
        <Box paddingTop={2}>
          <Typography sx={{ fontSize: "1.2rem" }}>Descritption:</Typography>
          <Typography
            variant="body1"
            sx={{
              overflow: "auto",
              flexGrow: 1,
              paddingBottom: 3,
              fontSize: "1.3rem",
            }}
          >
            {description}
          </Typography>
          <Typography sx={{ fontSize: "1.2rem" }}>Features:</Typography>
          <Typography
            variant="body1"
            sx={{
              overflow: "auto",
              flexGrow: 1,
              paddingBottom: 3,
              fontSize: "1.3rem",
            }}
          >
            {project.features}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
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
                      backgroundColor: "#e0e0e0",
                      borderRadius: 2,
                      padding: "0.5rem 1rem",
                      fontSize: "0.875rem",
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
