import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctors : null,
  doctorCreatedMsg : ""
};

const doctorSlice = createSlice({
  name : "doctor",
  initialState,
  reducers : {
    getAllDoctors : ( state , action ) => {
      state.doctors = action.payload;
    },
    creatDoctor : (state , action) => {
      if(action.payload) state.doctorCreatedMsg = "Doctor Created Successfully!"
    }
  }
});

export const {getAllDoctors , creatDoctor} = doctorSlice.actions;

export const doctorReducer = doctorSlice.reducer;
