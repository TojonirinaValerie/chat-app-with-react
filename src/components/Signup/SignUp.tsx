import { faCheck, faEnvelope, faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import { ButtonContent, ButtonSubmit, ErrorContent, FAIconInputLeft, FAIconRight, FAIconRightGreen, InputContent, InputText, InputWrapper, LinkSignin, LoginDescription, LoginForm, PSignup, SingupFooter } from "../../styles/AuthentificationStyle";
import routes from '../../constants/routes.json';
import React, { useEffect, useState } from "react";
import constant from '../../constants/constant.json';
import { IUser } from "../../interfaces/user.interface";
import Toaster from "../utils/toaster";
import { signUp } from "../../utils/api/authApi";

export interface FormControlInputText {
  value: string,
  isValid: boolean,
  isTouched: boolean,
  error: boolean,
  errorMessage: string
}

const SignUp = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showToaster, setShowToaster] = useState<boolean>(false);

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

  const [matchPassword, setMatchPassword] = useState<FormControlInputText>({
    value: '',
    isValid: false,
    isTouched: false,
    error: false,
    errorMessage: ''
  });

  // ---------------------------------------------------------------


  // ------------------------ Validation Form ----------------------

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
  useEffect(() => {
        const REGEX_PASSWORD = /(?=.{8,})/;
        setPassword((oldValue) => ({
            ...oldValue,
            error: !REGEX_PASSWORD.test(password.value),
            errorMessage: constant.formMessage.error.invalidPasswprd,
        }));

        if (password.value !== matchPassword.value ) {
            setMatchPassword((oldValue) => ({
                ...oldValue,
                error: true,
                errorMessage: constant.formMessage.error.invalidMatchPassword,
            }));
        } else {
            setMatchPassword((oldValue) => ({
                ...oldValue,
                error: false,
                errorMessage: '',
            }));
        }
    }, [password.value, matchPassword.value]);
    // *************************


// ---------------------------------------------------------------


// ---------------------------- Methode --------------------------

  const isValidForm = () => {
    return !email.error && !password.error && !matchPassword.error
  }

  useEffect( () => {
    setTimeout( ()=> {
      setShowToaster(false);
      console.log('toaster disparu');
    }, 3000);
  }, [showToaster]);

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    
    if(!isValidForm()){
      setShowToaster(true);
      return ;
    }

    const user: IUser = {
      email: email.value,
      password: password.value
    };

    signUp(user)
      .then( (response)=>{
        console.log(response);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

// ---------------------------------------------------------------

  return ( 
    <>

      <LoginDescription> Veuillez entrer votre identifiant et mot de passe </LoginDescription>

      <LoginForm onSubmit={handleSubmit}>

        <InputWrapper>
          <InputContent>
              <FAIconInputLeft icon={faEnvelope} />
              <InputText 
                type="text" 
                placeholder="Email"
                onChange={(e) => setEmail({...email, value: e.target.value})}
                onBlur={ () => setEmail({...email, isTouched: true})}
                error={email.error}
                isTouched={email.isTouched}
                required
              />
          </InputContent>
          { email.error && email.isTouched && <ErrorContent> {email.errorMessage} </ErrorContent>}
        </InputWrapper>
        
        <InputWrapper>
          <InputContent>
              <FAIconInputLeft icon={faLock} />
              <InputText 
                type={ showPassword ? "text" : "password" }
                placeholder="Mot de passe"
                onChange={(e) => setPassword({...password, value: e.target.value})}
                onBlur={ ()=> setPassword({...password, isTouched: true})}
                error={password.error}
                isTouched={password.isTouched}
                required
              />
              { showPassword ?
                <FAIconRight icon={faEye} onClick={() => setShowPassword(false)} />
                : 
                <FAIconRight icon={faEyeSlash} onClick={() => setShowPassword(true)} />
              }
          </InputContent>
          { password.error && password.isTouched && <ErrorContent> {password.errorMessage} </ErrorContent>}
        </InputWrapper>

        <InputWrapper>
          <InputContent>
              <InputText 
                type="password" 
                placeholder="Confirmation mot de passe"
                onChange={(e) => setMatchPassword({...matchPassword, value: e.target.value})}
                onBlur={() => setMatchPassword({...matchPassword, isTouched: true})}
                error={matchPassword.error && !password.error}
                isTouched={matchPassword.isTouched}
              />
              { !matchPassword.error && <FAIconRightGreen icon={faCheck} />}
          </InputContent>
          { matchPassword.error && matchPassword.isTouched && !password.error && <ErrorContent> {matchPassword.errorMessage} </ErrorContent>}
        </InputWrapper>

        <ButtonContent>
            <ButtonSubmit type="submit" disabled={!isValidForm()}> S'inscrire </ButtonSubmit>
        </ButtonContent>
      </LoginForm>

      <SingupFooter>
          <PSignup>
              <LinkSignin to={routes.LOGIN}> J'ai déjà un compte </LinkSignin>
          </PSignup>
      </SingupFooter>

      { showToaster && <Toaster message="invalid Form" />}
    </>
   );
}
 
export default SignUp;