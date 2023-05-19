import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdExitToApp } from "react-icons/md";
import "./loginregister.scss";
const Parse = require('parse/dist/parse.min.js');

export default function Logout() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  async function handleLogout() {
    try {
      await Parse.User.logOut();
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        setError("");
        setMessage("Pomyślnie wylogowano!");
        navigate("/");
      }
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <li onClick={() => handleLogout()}>
        <MdExitToApp style={{ marginRight: "5px" }} />
        Wyloguj się
      </li>
    </div>
  );
}
