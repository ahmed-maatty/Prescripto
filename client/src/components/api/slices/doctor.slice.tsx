import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctors : null
};

const doctorSlice = createSlice({
  name : "doctor",
  initialState,
  reducers : {
    getAllDoctors : ( state , action ) => {
      state.doctors = action.payload;
    } 
  }
});

export const {getAllDoctors} = doctorSlice.actions;

export const doctorReducer = doctorSlice.reducer;
