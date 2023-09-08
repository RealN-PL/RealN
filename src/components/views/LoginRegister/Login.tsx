import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import "./loginregister.scss";
// import { toast } from "react-toastify";
import logo from "../../../images/logo2.jpg";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { login } from "./accountSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = React.useState(false);
  const dispatch = useAppDispatch();
  const { loginError } = useAppSelector((state) => state.account);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePasswordOpen = () => {
    setOpenPassword(true);
  };

  const handlePasswordClose = () => {
    setOpenPassword(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await dispatch(login({ email, password }));
    } catch (error: any) {
      console.log(error);
    }
  };

  async function handleSubmitReset(e: any) {
    e.preventDefault();
    try {
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
      <li onClick={handleClickOpen} className="desktop">
        <MdPerson style={{ marginRight: "5px" }} />
        Logowanie
      </li>
      <li onClick={handleClickOpen} className="small">
        <MdPerson />
      </li>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        sx={{ overflowX: "visible" }}
      >
        <div className="login-box">
          <img src={logo} alt="logo realn" />
          <h2>Witamy!</h2>
          <p>Zaloguj się</p>
          <p>{loginError}</p>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              required
              type="email"
              id="fmail"
              placeholder="Wpisz swój adres email."
              name="fmail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label>Hasło</label>
            <input
              required
              type="password"
              id="password"
              name="password"
              placeholder="Wpisz swoje hasło"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button disabled={loading} type="submit">
              Zaloguj się
            </button>
            <div onClick={() => handlePasswordOpen()}>
              <p> Nie pamiętasz hasła? Kliknij tu!</p>
            </div>
          </form>
        </div>
      </Dialog>
      <Dialog
        open={openPassword}
        onClose={handlePasswordClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="reset-box">
          <h2>Resetuj hasło</h2>
          <form onSubmit={handleSubmitReset}>
            <label>Wpisz swój adres email</label>
            <input
              required
              type="email"
              id="fmail"
              name="fmail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button disabled={loading} type="submit">
              Wyślij
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
