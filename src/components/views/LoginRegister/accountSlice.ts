import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import router from "../../../Routes";
import { toast } from "react-toastify";

const Parse = require("parse/dist/parse.min.js");

interface AccountState {
  user: string[] | null;
  loginError: any;
  message: string;
}

const initialState: AccountState = {
  user: null,
  loginError: null,
  message: "",
};

const PARSE_APPLICATION_ID = "realn";
const PARSE_HOST_URL = "http://37.187.155.8:1337/parse/";
const PARSE_JAVASCRIPT_KEY = "realn";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export const login = createAsyncThunk<
  [string, string],
  { email: string; password: string },
  { rejectValue: string }
>("account/login", async ({ email, password }, thunkAPI) => {
  try {
    const user = await Parse.User.logIn(email, password);
    toast.success("Pomyślnie zalogowano!");
    return [user.id, user.attributes.username];
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk(
  "account/logout",
  async (_, thunkAPI) => {
    try {
      await Parse.User.logOut();
      router.navigate("/");
      window.location.reload();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "account/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const user = Parse.User.current();
      return [user.id, user.attributes.username];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.user = null;
        localStorage.removeItem("Parse/realn/currentUser");
        toast.error("Sesja wygasła!");
        router.navigate("/");
      })
      .addMatcher(
        isAnyOf(login.fulfilled, fetchCurrentUser.fulfilled),
        (state, action) => {
          state.user = action.payload;
        }
      )
      .addMatcher(isAnyOf(login.rejected), (state, action) => {
        state.loginError = action.payload;
        toast.error("Nie udało się zalogować");
      });
  },
});

export default accountSlice.reducer;
