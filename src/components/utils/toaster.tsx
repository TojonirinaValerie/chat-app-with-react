import styled from "styled-components";
import { LoginDescription } from "../../styles/AuthentificationStyle";

const ToasterContent = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 200px;
  background-color: aqua;
`;

interface IToasterProps{
  message: string
}

const Toaster = (props: IToasterProps) => {
  return ( 
    <>
      <ToasterContent>
        {props.message}
      </ToasterContent>
    </>
   );
}
 
export default Toaster;