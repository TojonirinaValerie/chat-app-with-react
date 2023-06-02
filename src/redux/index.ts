import { combineReducers } from "redux";
import { authReducer } from "./authentification/authReducer";

const globalReducer = combineReducers({
  auth: authReducer
});

export default globalReducer;

export type StateType = ReturnType<typeof globalReducer>;