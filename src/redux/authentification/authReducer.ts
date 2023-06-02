import produce from "immer"

export const enum AuthActionName {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  LOGOUT = 'LOGOUT'
}

export interface ILoginAction{
  type: AuthActionName.LOGIN
  payload: {
    email: string,
    token: string
  }
}

export interface ISignUpAction {
  type: AuthActionName.SIGNUP
}

export interface ILogOutAction {
  type: AuthActionName.LOGOUT
}

export interface AuthState {
  isAuth:boolean,
  email: string,
  token: string
}

export type AuthAction = ILoginAction | ISignUpAction | ILogOutAction

const initialState: AuthState = {
  isAuth: false,
  email: '',
  token: ''
}

export const authReducer = (state: AuthState = initialState, action: AuthAction) =>{

  switch(action.type) {
    case AuthActionName.LOGIN:
      
      return produce(state, (draft) => {
        draft.isAuth = true;
        draft.email = action.payload.email;
        draft.token = action.payload.token
      }) ;

    case AuthActionName.LOGOUT:
      return produce(state, draft => {
        draft.isAuth = false;
        draft.email = '';
        draft.token = '';
      });

    default: 
      return state;
    
  }

}

