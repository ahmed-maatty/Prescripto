import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlice";
import { doctorReducer } from "../slices/doctor.slice";
import { appointmentReducer } from "../slices/appointment";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    doctor: doctorReducer,
    appointment : appointmentReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;