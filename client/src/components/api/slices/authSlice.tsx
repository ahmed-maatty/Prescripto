import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  registerMsg: string | null;
  user: string | null;
  token: string | null;
  loginMsg: string | null;
  userappointments: Array<object> | null;
}

const initialState: AuthState = {
  registerMsg: null,
  user: null,
  token: null,
  loginMsg: null,
  userappointments: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action:PayloadAction<string>) {
      state.registerMsg = action.payload;
    },
    login(state, action) {
      state.token = action.payload.token;
      state.loginMsg = action.payload.message;
      state.user = action.payload.user;
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export const authReducer = authSlice.reducer;
