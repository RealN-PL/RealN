import "./App.css";
import Nav from "./components/views/nav/Nav";
import Footer from "./components/views/main/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/views/utils/ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";
import Main from "./components/views/main/Main";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./components/store/configureStore";
import { fetchCurrentUser } from "./components/views/LoginRegister/accountSlice";
import { fetchOffersAsync } from "./components/views/offers/catalogSlice";

const App = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const { dispPage, displayLimit, filterValue} = useAppSelector((state)=>state.catalog)

  const initApp = useCallback(async () => {
    try{
      await dispatch(fetchCurrentUser())
      await dispatch(fetchOffersAsync({dispPage, displayLimit, filterValue}))

    } catch (error){
      console.log(error)
    }
  }, [dispatch, dispPage, displayLimit, filterValue])

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  if (loading)
  return <div><h1>
    Ładowanie...
  </h1>
  </div>;

  return (
    <>
      <Nav />
      <ToastContainer position="top-right" hideProgressBar theme="colored" />
      <ScrollToTop />
      {location.pathname === "/" ? <Main /> : <Outlet />}
      <Footer />
    </>
  );
};

export default App;
