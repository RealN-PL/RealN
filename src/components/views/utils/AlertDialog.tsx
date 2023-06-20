import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import { deleteOfferAsync } from "../offers/catalogSlice";
import { useAppDispatch } from "../../store/configureStore";
import "../AddOffer/addoffer.scss";

interface Props {
  id: String | undefined;
}

export default function AlertDialog({ id }: Props) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteOffer = () => {
    dispatch(deleteOfferAsync(id));
    handleClose();
  };
  return (
    <div>
      <button className="add-offer_box__delete" onClick={handleClickOpen}>
        Usuń ofertę
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Czy na pewno chcesz usunąć ofertę?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Nie
          </Button>
          <Button onClick={() => deleteOffer()}>Tak</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
