import { Container, Typography } from "@mui/material";
import UserForm from "@/components/UserForm";

export default function CreateEditPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Kullanıcı Formu
      </Typography>
      <UserForm />
    </Container>
  );
}
