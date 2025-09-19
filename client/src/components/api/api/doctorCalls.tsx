import { toast } from "react-toastify";
import baseUrl from "../domain/baseUrl";
import { getAllDoctors,creatDoctor } from "../slices/doctor.slice";

export function getAllDoctorFunc() {
  return async (dispatch) => {
    try {
      const res = await baseUrl.get("/doctor/doctors");
      dispatch(getAllDoctors(res.data));
      toast.success(res.data.message);
    } catch (err) {
      toast.error("Server Error!");
      console.log(err)
    }
  };
}

export function createDoctorFunc(data){
  return async (dispatch , getState) => {
    try {
      const res = await baseUrl.post("/doctor/create-doctor", data , {
        headers : {
          Authorization : getState().auth.token
        }
      });
      dispatch(creatDoctor(res.data));
      toast.success("Doctor Created SuccessFully!")
    } catch (err) {
      toast.error("Server Error!");
      console.log(err)
    }
  }
}
