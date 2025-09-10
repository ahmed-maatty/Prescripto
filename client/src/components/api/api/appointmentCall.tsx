import baseUrl from "../domain/baseUrl";
import { createAppointment } from "../slices/appointment";

export function makeAppointmentFunc(appiontmetn, doctorId) {
  return async (dispatch , getState) => {
    const { data } = await baseUrl.post(
      `/appointment/${doctorId}`,
      appiontmetn,
      {
        headers: {
          Authorization: getState().auth.token,
        },
      }
    );
    console.log();
    dispatch(createAppointment(data));
  };
}