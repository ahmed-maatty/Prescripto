import { toast } from "react-toastify";
import baseUrl from "../domain/baseUrl";
import { login, logout, register } from "../slices/authSlice";
import type { LoginData , RegisterData } from "../../hooks/interfaces";



export function loginFunc(userData : LoginData) {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post("/user/login" , userData);
      dispatch(login(res.data));
      toast.success(res.data.message);
      
    } catch (err) {
      toast.error(err.message);
    }
  };
}

export function registerFunc(userInfo : RegisterData){
  return async (dispatch)=>{
    try {
      const res = await baseUrl.post("/user/register" , userInfo);
      dispatch(register(res.data));
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.message);
    }
  }
}

export function logoutFunc() {
    return (dispatch) => {
      try {
        dispatch(logout())
      } catch (err) {
        toast.error(err.message);
      }
    }
}
