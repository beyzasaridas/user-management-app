"use client";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

export default function ConfirmDialog({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Silme Onayı</DialogTitle>
      <DialogContent>
        <DialogContentText>Bu kullanıcıyı silmek istediğinize emin misiniz?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>İptal</Button>
        <Button onClick={onConfirm} color="error">Sil</Button>
      </DialogActions>
    </Dialog>
  );
}
