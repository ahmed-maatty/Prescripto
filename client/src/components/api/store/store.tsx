import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlice";
import { doctorReducer } from "../slices/doctor.slice";
import { appointmentReducer } from "../slices/appointment";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Failed to load state from localStorage:", e);
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.error("Failed to save state to localStorage:", e);
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    doctor: doctorReducer,
    appointment: appointmentReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;