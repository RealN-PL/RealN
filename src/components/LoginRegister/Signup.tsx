import Dialog from '@mui/material/Dialog';
import React, {  useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdPersonAdd } from "react-icons/md";
import "./loginregister.scss";
import UserPool from "../../UserPool";
import { AccountContext } from '../Account';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { getSession, status  } = useContext(AccountContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e:any) {
    e.preventDefault();
    UserPool.signUp(email, password, [], [], (err, data) => {
      if(err) {
        console.error(err);
        setError(err.message);
      } else {
        console.log(data);
        try {
          setError("");
          setLoading(true);
          handleClose();
          // setMessage("Pomyślnie założono konto!");
          navigate("/");
        } catch {
          setError("Failed to create an account");
        }
        setLoading(false);  
      }
    });

  }
  console.log(getSession())
  return (
    <>
     {!status && <li onClick={handleClickOpen} >
        <MdPersonAdd style={{ marginRight: "5px" }} />
        Rejestracja
      </li>}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="login-box register-box" >
          <h2>Rejestracja</h2>
          {error && <h3>{error}</h3>}
          <form onSubmit={handleSubmit} >
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
            <label>Potwierdź hasło</label>
            <input
              required
              type="password"
              id="password-confirm"
              name="password-confirm"
            />
            <button
              disabled={loading}
     
              type="submit"
            >
              Zarejestruj się
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
