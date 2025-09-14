import baseUrl from "../domain/baseUrl";
import { createAppointment, getAllAppointments } from "../slices/appointment";

export function makeAppointmentFunc(appiontmetn, doctorId) {
  return async (dispatch , getState) => {
    try {
      const { data } = await baseUrl.post(
        `/appointment/${doctorId}`,
        appiontmetn,
        {
          headers: {
            Authorization: getState().auth.token,
          },
        }
      );
      dispatch(createAppointment(data));
      
    } catch (error) {
      console.log(error)
    }
  }
}

export function getAllAppointmentsFunc(){
  return async (dispatch ,getState) => {
    try {
      const {data} = await baseUrl.get("/appointment" , {
        headers : {
          Authorization: getState().auth.token 
        }
      });
      dispatch(getAllAppointments(data))
      
    } catch (error) {
      console.log(error)
    }
  }
}

export function cancelAppointmentFunc(id : string){
  return async () => {
    const {data} = await baseUrl.delete(`/appointment/${id}`);
    console.log(data)
  }
}