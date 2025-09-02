import { toast } from "react-toastify";
import baseUrl from "../domain/baseUrl";
import { getAllDoctors } from "../slices/doctor.slice";

export function getAllDoctorFunc() {
  return async (dispatch) => {
    try {
      const res = await baseUrl.get("/doctor/doctors");
      dispatch(getAllDoctors(res.data));
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };
}
