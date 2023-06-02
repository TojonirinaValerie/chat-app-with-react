import { faEnvelope, faMessage, faPhone, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderSectionLeft, Left, MenuList, MenuListProfil } from "../../styles/HomeStyle";
import Profil from '../../assets/images/profil.jpg';

const SectionLeft: React.FunctionComponent<{children: React.ReactNode}> = ({children}) => {
  return(
    <Left>
      <HeaderSectionLeft>
        <MenuList>
          <FontAwesomeIcon icon={faMessage} className="menu-active" />
        </MenuList>
        <MenuList>
          <FontAwesomeIcon icon={faPhone} />
        </MenuList>
        <MenuList>
          <FontAwesomeIcon icon={faEnvelope} />
        </MenuList>
        <MenuList>
          <FontAwesomeIcon icon={faUsers} />
        </MenuList>
        <MenuListProfil>
          <img src={Profil} alt="" />
        </MenuListProfil>
      </HeaderSectionLeft>
      { children }
    </Left>
  )
}

export default SectionLeft;