import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerMsg: null,
  user: null,
  token: null,
  loginMsg: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action) {
      state.registerMsg = action.payload;
    },
    login(state, action) {
      state.token = action.payload.token;
      state.loginMsg = action.payload.message;
      state.user = action.payload.user;
    },
    logout(state) {
      state.token = null;
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export const authReducer = authSlice.reducer;
