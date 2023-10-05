import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import "./loginregister.scss";
// import { toast } from "react-toastify";
import logo from "../../../images/logo2.jpg";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { login } from "./accountSlice";
import i18next from 'i18n';

export default function Login() {
  const t = i18next.t;
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
        {t("login:login")}
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
          <h2>{t("login:welcome")}</h2>
          <p>{loginError}</p>
          <form onSubmit={handleSubmit}>
            <label hidden>Email</label>
            <input
              required
              type="email"
              id="fmail"
              placeholder={t("login:enter-email")}
              name="fmail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label hidden>Hasło</label>
            <input
              required
              type="password"
              id="password"
              name="password"
              placeholder={t("login:enter-password")}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
             <div onClick={() => handlePasswordOpen()} className="remember-password">
              <p>{t("login:forget-password")}</p>
            </div>
            <button disabled={loading} type="submit">
            {t("login:log-in")}
            </button>
           
          </form>
        </div>
      </Dialog>
      <Dialog
        open={openPassword}
        onClose={handlePasswordClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="reset-box">
          <h2>{t("login:reset-password")}</h2>
          <form onSubmit={handleSubmitReset}>
            <label>{t("login:enter-email")}</label>
            <input
              required
              type="email"
              id="fmail"
              name="fmail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button disabled={loading} type="submit">
            {t("login:send")}
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
