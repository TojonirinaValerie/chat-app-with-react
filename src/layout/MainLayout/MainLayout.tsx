import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StateType } from "../../redux";
import { AuthActionName,  ILogOutAction } from "../../redux/authentification/authReducer";
import { AppTitle, ButtonTop, Container, Content, HeaderStyle } from "../../styles/HomeStyle";
import routes from '../../constants/routes.json';

const MainLayout: React.FunctionComponent<{children: React.ReactNode}> = ({ children}) => {

  const dispacth = useDispatch();
  const navigate = useNavigate();

  const logOut = ()=>{
    dispacth<ILogOutAction>({
      type: AuthActionName.LOGOUT
    });
    navigate(routes.LOGIN, {replace: true});
  }

  return (
    <Container>
      <HeaderStyle>
        <AppTitle> Chat ONN </AppTitle>
        <ButtonTop> Create memorable talks </ButtonTop>
        <ButtonTop onClick={logOut}> LogOut </ButtonTop>
      </HeaderStyle>
      <Content>
        { children }
      </Content>
    </Container>
  )
}


export default MainLayout;