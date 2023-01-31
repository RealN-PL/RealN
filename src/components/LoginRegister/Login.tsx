import Dialog from "@mui/material/Dialog";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdExitToApp, MdPerson } from "react-icons/md";
import "./loginregister.scss";
import { AccountContext } from "../Account";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openPassword, setOpenPassword] = React.useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { authenticate, logout, status } = useContext(AccountContext);

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

  async function handleSubmit(e: any) {
    e.preventDefault();

    authenticate(email, password)
      .then((data: any) => {
        console.log("Logged in!", data);
        try {
          setError("");
          setMessage("");
          setLoading(true);
          handleClose();
          setMessage("Pomyślnie zalogowano!");
          navigate("/");
        } catch {
          setError("Sprawdź adres email lub hasło");
        }
        setLoading(false);
      })
      .catch((err: any) => {
        console.log("Failed to login", err.message);
        err.message.includes("Incorrect")&& 
        setError("Nieprawidłowy email lub hasło");
        console.log(error)
      });
  }

  async function handleSubmitReset(e: any) {
    e.preventDefault();
    try {
      setPassError("");
      setMessage("");
      setLoading(true);
      setMessage("Sprawdź swoją skrzynkę pocztową!");
    } catch {
      setPassError("Nie udało się zresetować hasła");
    }
    setLoading(false);
  }


  async function handleLogout() {
    try {
      setError("");
      logout();
      setMessage("Pomyślnie wylogowano!");
      navigate("/");
      window.location.reload();

    } catch {
      setError("Failed to log out");
    }

  }

  return (
    <>
      {status ? (
        <li onClick={() => handleLogout()}>
          <MdExitToApp style={{ marginRight: "5px" }} />
          Wyloguj się
        </li>
      ) : (
        <li onClick={handleClickOpen}>
          <MdPerson style={{ marginRight: "5px" }} />
          Logowanie
        </li>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="login-box">
          <h2>Logowanie</h2>
          {error && <h3 className="login-error">{error}</h3>}
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              required
              type="email"
              id="fmail"
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
            {passError && <h3 >{passError}</h3>}
            {message && <h3 >{message}</h3>}
            <button disabled={loading} type="submit">
              Wyślij
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
