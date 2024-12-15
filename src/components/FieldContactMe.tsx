import { Box, Button, TextField } from "@mui/material";

export default function FieldContactMe() {
  return (
    <Box>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          };
          fetch("https://example.com/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              to: "yoshuapurba27@gmail.com",
              ...data,
            }),
          });
        }}
      >
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          variant="outlined"
          name="name"
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
          name="email"
        />
        <TextField
          fullWidth
          label="Message"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          name="message"
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
}
