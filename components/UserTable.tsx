"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";
import { users } from "@/utils/mockData";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

export default function UserTable() {
  const router = useRouter();
  const [data, setData] = useState(users);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((user) => user.id !== id));
    setDeleteId(null);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "İsim", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "actions",
      headerName: "İşlemler",
      width: 200,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button
            onClick={() => router.push(`/create-edit?id=${params.row.id}`)}
            startIcon={<EditIcon />}
            variant="outlined"
          >
            Düzenle
          </Button>
          <Button
            onClick={() => setDeleteId(params.row.id)}
            color="error"
            startIcon={<DeleteIcon />}
            variant="outlined"
          >
            Sil
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <>
      <DataGrid
        rows={data}
        columns={columns}
        autoHeight
        pageSizeOptions={[5, 10]}
        checkboxSelection={false}
      />
      <ConfirmDialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => deleteId && handleDelete(deleteId)}
      />
    </>
  );
}
