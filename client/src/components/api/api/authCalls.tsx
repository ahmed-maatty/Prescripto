import baseUrl from "../domain/baseUrl";
import { login } from "../slices/authSlice";

interface LoginData {
  email:string,
  password:string
}

export function loginFunc(userData : LoginData) {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post("/user/login" , userData);
      dispatch(login(res.data))
    } catch (error) {
      console.log(error);
    }
  };
}
