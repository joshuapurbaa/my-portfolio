import Button from "@mui/material/Button/Button";
import useResponsive from "../hooks/useResponsive";

export interface ContactButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  icon,
  text,
  onClick,
}) => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={icon}
      sx={{
        fontSize: isMobile ? "0.8rem" : isTablet ? "0.9rem" : "1rem",
        padding: isMobile ? "8px 16px" : isTablet ? "9px 18px" : "10px 20px",
        width: isMobile ? "160px" : isTablet ? "180px" : "200px",
        height: isMobile ? "40px" : isTablet ? "45px" : "50px",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ContactButton;
