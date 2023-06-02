import { axiosInstance } from "./configAxios";
import api from '../../constants/api.json';
import { IUser } from "../../interfaces/user.interface";

export const signUp = async (user: IUser)=>{
  return await axiosInstance.post(api.authentification.signup, user);
} 

export const logIn = async (user: IUser)=>{
  return await axiosInstance.post(api.authentification.login, user);
} 

export const getUserData = async () => {
  return await axiosInstance.get(api.global.getUserData);
}