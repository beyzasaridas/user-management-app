"use client";
import { TextField, Button, Stack } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { users } from "@/utils/mockData";

export default function UserForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (id) {
      const existingUser = users.find((u) => u.id === Number(id));
      if (existingUser) {
        setName(existingUser.name);
        setEmail(existingUser.email);
      }
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      const index = users.findIndex((u) => u.id === Number(id));
      users[index] = { id: Number(id), name, email };
    } else {
      users.push({ id: Date.now(), name, email });
    }
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} maxWidth={400}>
        <TextField
          label="İsim"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button variant="contained" type="submit">
          Kaydet
        </Button>
      </Stack>
    </form>
  );
}
