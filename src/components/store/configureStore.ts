import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "../views/LoginRegister/accountSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { utilitySlice } from "./utilitySlice";
import { catalogSlice } from "../views/offers/catalogSlice";

export const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
    utility : utilitySlice.reducer,
    catalog: catalogSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
