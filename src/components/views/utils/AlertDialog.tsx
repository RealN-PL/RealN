import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import { deleteOfferAsync } from "../offers/catalogSlice";
import { useAppDispatch } from "../../store/configureStore";
import "../AddOffer/addoffer.scss";
import i18next from "i18n";

interface Props {
  id: String | undefined;
}

export default function AlertDialog({ id }: Props) {
  const t = i18next.t;
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
    <>
      <button className="add-offer_box__delete" onClick={handleClickOpen}>
        {t("utils:delete-offer")}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t("utils:you-shure-to-delete")}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            {t("utils:no")}
          </Button>
          <Button onClick={() => deleteOffer()}>{t("utils:yes")}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
