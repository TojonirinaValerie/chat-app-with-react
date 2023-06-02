import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { StateType } from "../../redux";
import { AuthActionName, AuthState, ILoginAction } from "../../redux/authentification/authReducer";
import { AuthBloc, AuthContainer, LoginContent } from "../../styles/AuthentificationStyle";
import routes from '../../constants/routes.json';
import { getUserData } from "../../utils/api/authApi";

const AuthLayout: React.FunctionComponent = () =>{

  const dispatch = useDispatch();

  const state: AuthState = useSelector((state: StateType) => {
    return state.auth
  });

  const navigate = useNavigate();

  useEffect(()=>{
  
    if(!state.isAuth){
  
      const token = localStorage.getItem('token');
      
      if(token && token!=='') {
  
        getUserData()
        .then( response => {
          
          const loginAction: ILoginAction = {
              type: AuthActionName.LOGIN,
              payload: {
                email: response.data.data.email,
                token
              }
          }

          dispatch<ILoginAction>(loginAction);
          navigate(routes.HOME, {replace: true});
        })
        .catch( err => {
          console.log(err);
        });

      }

    }

  });

  return (
    !state.isAuth ? (
      <AuthContainer>
        <AuthBloc>
            <LoginContent>
                <h1> CHAT </h1>
                <Outlet />
            </LoginContent>
        </AuthBloc>
      </AuthContainer>
    ) : (
        <Navigate to={routes.HOME} replace={true} />
        // <div></div>
    )
    
  )
}

export default AuthLayout;