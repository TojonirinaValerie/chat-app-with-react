import { faEnvelope, faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { ButtonContent, ButtonForgotPassword, ButtonSignup, ButtonSubmit, ErrorContent, FAIconInputLeft, FAIconRight, InputContent, InputText, InputWrapper, LinkForgotPassword, LinkSignup, LoginDescription, LoginFooter, LoginForm } from "../../styles/AuthentificationStyle";
import routes from '../../constants/routes.json';
import { useDispatch } from "react-redux";
import { AuthActionName, ILoginAction } from "../../redux/authentification/authReducer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControlInputText } from "../Signup/SignUp";
import constant from '../../constants/constant.json';
import { IUser } from "../../interfaces/user.interface";
import { logIn } from "../../utils/api/authApi";
import { ApiLoginResponse } from "../../interfaces/api-response.interface";
import { useSelector } from "react-redux";
import { StateType } from "../../redux";

const Login: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector( (state: StateType) => {
    return state.auth;
  });

  // console.log('state = ', authState);
  
  if(authState.isAuth) navigate(routes.HOME, {replace: true});

// -------------------------- State ---------------------------------

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<FormControlInputText>({
    value: '',
    isValid: false,
    isTouched: false,
    error: false,
    errorMessage: ''
  });

  const [password, setPassword] = useState<FormControlInputText>({
    value: '',
    isValid: false,
    isTouched: false,
    error: false,
    errorMessage: ''
  });

// ------------------------------------------------------------------

// ------------------------ Validation -------------------------------
  //* validation email
  useEffect( ()=> {

    const EMAIL_REGEX = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    setEmail( (oldValue) => ({
      ...oldValue,
      error: !EMAIL_REGEX.test(email.value),
      errorMessage: constant.formMessage.error.invalidEmail
    }));

  }, [email.value]);
  // ********

  //* validation password
  // useEffect(() => {
  //       const REGEX_PASSWORD = /(?=.{8,})/;
  //       setPassword((oldValue) => ({
  //           ...oldValue,
  //           error: !REGEX_PASSWORD.test(password.value),
  //           errorMessage: constant.formMessage.error.invalidPasswprd,
  //       }));
  //   }, [password.value]);
    // *************************
// ------------------------------------------------------------------

// ------------------------------- Methode --------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user: IUser = {
      email: email.value,
      password: password.value
    }

    logIn(user)
      .then( (response) => {
        const data: ApiLoginResponse = response.data;

        localStorage.setItem('token', data.data.token);

        dispatch<ILoginAction>({
          type: AuthActionName.LOGIN,
          payload: data.data
        });

        navigate(routes.HOME, {replace: true});

      })
      .catch( (error) => {
        console.log('erreur', error);
      });
  }
// ------------------------------------------------------------------
  return ( 
    <>
      <LoginDescription> Veuillez entrer votre identifiant et mot de passe </LoginDescription>

      <LoginForm onSubmit={handleSubmit}>
        
        <InputWrapper>
          <InputContent>
              <FAIconInputLeft icon={faEnvelope} />
              <InputText 
                error={email.error}
                isTouched={email.isTouched}
                type="text" 
                placeholder="Identifiant"
                onChange={(e) => setEmail({...email, value: e.target.value})}
                onBlur={() => setEmail({...email, isTouched: true})}
                required
                />
          </InputContent>
          { email.error && email.isTouched && <ErrorContent> {email.errorMessage} </ErrorContent>}
        </InputWrapper>

        <InputWrapper>
          <InputContent>
              <FAIconInputLeft icon={faLock} />
              <InputText 
                type={showPassword ? "text" : "password"} 
                placeholder="Mot de passe"
                onChange={(e) => setPassword({...password, value: e.target.value})}
                onBlur={ ()=> setPassword({...password, isTouched: true})}
                error={password.error}
                isTouched={password.isTouched}
                required
              />
              { !showPassword && <FAIconRight icon={faEyeSlash} onClick={()=> setShowPassword(true)} />}
              { showPassword && <FAIconRight icon={faEye} onClick={()=> setShowPassword(false)} /> }
          </InputContent>
          { password.error && password.isTouched && <ErrorContent> {password.errorMessage} </ErrorContent>}
        </InputWrapper>

        <ButtonContent>
            <ButtonSubmit type="submit"> Se connecter </ButtonSubmit>
        </ButtonContent>

      </LoginForm>

      <LoginFooter>
          <ButtonForgotPassword>
              <LinkForgotPassword to=""> Mot de passe oublier? </LinkForgotPassword>
          </ButtonForgotPassword>
          <ButtonSignup>
              <LinkSignup to={routes.SIGNUP}> Créer un compte </LinkSignup>
          </ButtonSignup>
      </LoginFooter>
    </>
   );
}
 
export default Login;