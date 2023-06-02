import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { StateType } from "../redux";
import { AuthActionName, AuthState, ILoginAction } from "../redux/authentification/authReducer";
import routes from '../constants/routes.json';
import { getUserData } from "../utils/api/authApi";
import { useEffect } from "react";

const AuthRequire: React.FunctionComponent = () => {

  const dispatch = useDispatch();

  const state: AuthState = useSelector((state: StateType) => {
    return state.auth
  });

  const navigate = useNavigate();

  useEffect(()=>{
  
    if(!state.isAuth){
  
      const token = localStorage.getItem('token');
      
      if(token && token!=='') {
  
        // getUserData()
        //   .then( response => {
        //     console.log(response.data.data);
        //     const loginAction: ILoginAction = {
        //         type: AuthActionName.LOGIN,
        //         payload: {
        //           email: response.data.data.email,
        //           token
        //         }
        //     }
        //     dispatch<ILoginAction>(loginAction);
            
        //   })
        //   .catch( err => {
        //     navigate(routes.LOGIN, {replace: true});
        //   });
      }
      else {
        // Si "isAuth = false" et il y n'y a pas de token dans le local storage
        // donc l'utilisateur n'est pas authentifié, 
        // redirection vers la page d'authentification
        navigate(routes.LOGIN, {replace: true});
      }
    }

  });

  return ( 
    state.isAuth ? (
      <Outlet /> 
    ) : (
      <Navigate to={routes.LOGIN} replace={true} />
      // <div></div>
    )
  );
}

export default AuthRequire;