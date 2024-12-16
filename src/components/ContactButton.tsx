import Button from "@mui/material/Button/Button";

export interface ContactButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  icon,
  text,
  onClick,
}) => (
  <Button
    variant="outlined"
    color="primary"
    startIcon={icon}
    sx={{
      fontSize: "1rem",
      padding: "10px 20px",
      width: "200px",
      height: "50px",
    }}
    onClick={onClick}
  >
    {text}
  </Button>
);

export default ContactButton;
