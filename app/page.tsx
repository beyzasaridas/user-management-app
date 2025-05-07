import { Button, Container, Typography } from "@mui/material";
import UserTable from "@/components/UserTable";
import Link from "next/link";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Kullanıcı Listesi
      </Typography>
      <Link href="/create-edit">
        <Button variant="contained" sx={{ mb: 2 }}>
          Yeni Kullanıcı Ekle
        </Button>
      </Link>
      <UserTable />
    </Container>
  );
}
