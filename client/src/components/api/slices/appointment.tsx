import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointmentMsg: "",
  appointments: null,
};

const appointment = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    createAppointment(state, action) {
      if (action.payload) {
        state.appointmentMsg = `We Waiting You in ${action.payload.day} at ${action.payload.time}`;
      }
    },
    getAllAppointments(state, action) {
      state.appointments = action.payload;
    },
  },
});

export const appointmentReducer = appointment.reducer;
export const { createAppointment } = appointment.actions;
