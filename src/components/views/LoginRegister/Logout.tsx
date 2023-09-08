import { MdExitToApp } from "react-icons/md";
import "./loginregister.scss";
import { useAppDispatch } from "../../store/configureStore";
import router from "../../../Routes";
import { logout } from "./accountSlice";
import { toast } from "react-toastify";

export default function Logout() {
  const dispatch = useAppDispatch();

  const handleLogout = async (e: any) => {
    try {
      await dispatch(logout());
      router.navigate("/");
      toast.error("Pomyślnie wylogowano!")

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li onClick={handleLogout}>
      <MdExitToApp style={{ marginRight: "5px" }} />
      Wyloguj się
    </li>
  );
}
