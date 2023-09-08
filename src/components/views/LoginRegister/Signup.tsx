import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdPersonAdd } from "react-icons/md";
import "./loginregister.scss";
// import { toast } from "react-toastify";
import logo from "../../../images/logo2.jpg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [agentId, setAgentId] = useState("");
  const [username, setUsername] = useState("");
  // const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [agentRegister, setAgentRegister] = useState(false);
  const navigate = useNavigate();
  // const { getSession, status } = useContext(AccountContext);

  const handleClickOpen = () => {
    setOpen(true);
    setError("noerror");
    setLoading(false);
    navigate("/");
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    // user.signUp(email, password, [], [], (err: any, data: any) => {
    //   if (err) {
    //     console.error(err);
    //     setError(err.message);
    //   } else {
    //     console.log(data);
    //     try {
    //       setError("");
    //       setLoading(true);
    //       handleClose();
    //       toast.success("Pomyślnie założono konto!", { theme: "colored" });
    //       navigate("/");
    //     } catch {
    //       toast.error("Problem z założeniem konta!", { theme: "colored" });
    //     }
    //     setLoading(false);
    //   }
    // });
  }
  return (
    <>
      <li onClick={handleClickOpen} className="desktop">
        <MdPersonAdd style={{ marginRight: "5px" }} />
        Rejestracja
      </li>

      <li onClick={handleClickOpen} className="small">
        <MdPersonAdd />
      </li>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="login-box register-box">
        <img src={logo} alt="logo realn" />

          <h2>Rejestracja</h2>
          {error !== "noerror" && <h3>{error}</h3>}
          <form onSubmit={handleSubmit}>
            <input
              required
              placeholder="Email"
              type="email"
              id="fmail"
              name="fmail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              required
              placeholder="Numer telefonu"
              type="number"
              id="fphone"
              name="fphone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <input
              required
              placeholder="Hasło"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              required
              placeholder="Nazwa użytkownika"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              required
              placeholder="Powtórz hasło"
              type="password"
              id="password-confirm"
              name="password-confirm"
            />
            <div className="checkbox-box">
              <input type="checkbox" onChange={()=>setAgentRegister(!agentRegister)}></input>
              <span>Rejestruję się jako agent</span>
            </div>
           {agentRegister &&  
           <input
              required
              placeholder="Agent ID"
              type="text"
              id="agentId"
              name="agentId"
              value={agentId}
              onChange={(event) => setAgentId(event.target.value)}
            />}
            <button disabled={loading} type="submit">
              Zarejestruj się
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
