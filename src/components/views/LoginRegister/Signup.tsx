import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdPersonAdd } from "react-icons/md";
import "./loginregister.scss";
// import { toast } from "react-toastify";
import logo from "../../../images/logo2.jpg";
import i18next from 'i18n';

export default function Signup() {
  const t = i18next.t;
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
        {t("login:registration")}
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

          <h2>{t("login:registration")}</h2>
          {error !== "noerror" && <h3>{error}</h3>}
          <form onSubmit={handleSubmit}>
            <input
              required
              placeholder={t("login:email")}
              type="email"
              id="fmail"
              name="fmail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              required
              placeholder={t("login:phone-number")}
              type="number"
              id="fphone"
              name="fphone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <input
              required
              placeholder={t("login:password")}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              required
              placeholder={t("login:user-name")}
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              required
              placeholder={t("login:repeat-password")}
              type="password"
              id="password-confirm"
              name="password-confirm"
            />
            <div className="checkbox-box">
              <input type="checkbox" onChange={()=>setAgentRegister(!agentRegister)}></input>
              <span>{t("login:registering-as-agent")}</span>
            </div>
           {agentRegister &&  
           <input
              required
              placeholder={t("login:agent-id")}
              type="text"
              id="agentId"
              name="agentId"
              value={agentId}
              onChange={(event) => setAgentId(event.target.value)}
            />}
            <button disabled={loading} type="submit">
              {t("login:register")}
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
