import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, displayFlexRow,displayFlexColumn } from "./variables";
export const AuthContainer = styled.div`
  height: 100%;
  ${displayFlexRow}
  align-items: center;
`;

export const AuthBloc = styled.div`
  width: 100%;
  ${displayFlexColumn}
  align-items: center;
`;

export const LoginContent = styled.div`
  ${displayFlexColumn}
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.35);
  padding: 20px 40px; 
`;

export const LoginDescription = styled.p`
  margin-top: 10px;
`;

export const LoginForm = styled.form`
  ${displayFlexColumn}
  justify-content: center;
  width: 100%;
  margin: 20px;
`;

const divInForm = `
  padding: 0 10px;
  margin: 10px;
`
export const InputContent = styled.div`
  /* ${divInForm} */
  ${displayFlexRow}
  position: relative;
  align-items: center;
`;


const IconLeftStyle = `
  position:absolute;
  left: 15px;
  padding:10px;\
`;

const IconRightStyle = `
  position:absolute;
  left: 245px;
  padding:10px;
  cursor: pointer;
`;

export const FAIconInputLeft = styled(FontAwesomeIcon)`
    ${IconLeftStyle}
`;

export const FAIconRight = styled(FontAwesomeIcon)`
    color: ${color.black};
    ${IconRightStyle}
    cursor: pointer;
`;

export const FAIconRightGreen = styled(FontAwesomeIcon)`
    color: ${color.green};
    ${IconRightStyle}
    cursor: pointer;
`;

export const InputText = styled.input<{error?: boolean, isTouched?: boolean}>`
  width: 100%;
  border: none;
  background: ${color.bgWhite1};
  border-radius: 45px;
  padding: 12px;
  padding-left: 45px;
  font-weight: bold;
  color: ${color.black};
  border: 2px solid ${ ({error, isTouched}) => ( error && isTouched ? color.redNotif : color.greyLight) };
  outline: none;
  transition-property: border, box-shadow;
  transition-duration: 0.3s;
  &:focus{
    outline: none;
    border: 2px solid ${ ({error, isTouched}) => ( error && isTouched ? color.redNotif : color.purpleDark) };
    box-shadow: 0px 0px 3px ${ ({error, isTouched}) => ( error && isTouched ? color.redNotif : color.purpleDark) };;
  }
  &::placeholder{
    color: ${color.black};
    font-weight: bold;
  }
  &[type="password"]{
    padding-right: 40px;
  }
`;

export const ButtonContent = styled.div`
  ${divInForm}
`;

export const ButtonSubmit = styled.button`
  border: none;
  width: 100%;
  background: ${color.purpleLight};
  border-radius: 45px;
  padding: 12px;
  font-weight: bold;
  color: ${color.white};
  cursor: pointer;
  &:disabled{
    background-color: ${color.purpleLight1};
  }
  &:focus{
    outline: none;
  }
`;

export const LoginFooter = styled.div`
  ${displayFlexRow}
  justify-content: space-between;
  width: 100%;
`;

export const ButtonForgotPassword = styled.p`
  margin-left: 5px;
  cursor: pointer;
`;

export const ButtonSignup = styled.p`
  margin-right: 5px;
  color: ${color.purpleLight};
  cursor: pointer;
`;

export const LinkForgotPassword = styled(Link)`
  text-decoration: none;
  color: ${color.black};
`;

export const LinkSignup = styled(Link)`
  text-decoration: none;
`;

export const SingupFooter = styled.div`
  justify-content: center;
`;

export const PSignup = styled.p`
`;

export const LinkSignin = styled(Link)`
  text-decoration: none;
  color: ${color.purpleLight};
`;

export const ErrorContent = styled.div`
    padding: 0px 5px;
    color: ${color.redNotif};
    font-size: 0.8em;
`;

export const InputWrapper = styled.div`
    ${divInForm}
`;
