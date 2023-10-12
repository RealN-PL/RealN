import { MdExitToApp } from "react-icons/md";
import "./loginregister.scss";
import { useAppDispatch } from "../../store/configureStore";
import router from "../../../Routes";
import { logout } from "./accountSlice";
import { toast } from "react-toastify";
import i18next from 'i18n';

export default function Logout() {
  const t = i18next.t;

  const dispatch = useAppDispatch();

  const handleLogout = async (e: any) => {
    try {
      await dispatch(logout());
      router.navigate("/");
      toast.error(t("login:successfully-logged-out"))

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li onClick={handleLogout}>
      <MdExitToApp style={{ marginRight: "5px" }} />
      {t("login:logout")}
    </li>
  );
}
