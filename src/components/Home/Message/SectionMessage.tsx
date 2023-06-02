import { faEllipsis, faFile, faMicrophone, faPhone, faShare, faSmile, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionZone, ButtonSendIcon, Center, HeaderCenterLeft, HeaderCenterMenu, HeaderCenterRight, HeaderSectionCenter, InputContent, InputIcon, InputZone, MessageInput, MessagesListContent, MessageUserInfo, MessageUserProfil, MicrophoneIcon, UserLastConnex, UserName } from "../../../styles/HomeStyle";
import MessageRowComponents from "./MessageRow";
import Profil from '../../../assets/images/profil.jpg';

const SectionMessage = ()=>{
  return (
    <Center>
      <HeaderSectionCenter>
        <HeaderCenterLeft>
          <MessageUserProfil>
            <img src={Profil} alt="" />
          </MessageUserProfil>
          <MessageUserInfo>
            <UserName> Nom user </UserName>
            <UserLastConnex> last seen 3 hours ago </UserLastConnex>
          </MessageUserInfo>
        </HeaderCenterLeft>
        <HeaderCenterRight>
          <HeaderCenterMenu> <FontAwesomeIcon icon={faPhone} /></HeaderCenterMenu>
          <HeaderCenterMenu> <FontAwesomeIcon icon={faVideo} /></HeaderCenterMenu>
          <HeaderCenterMenu> <FontAwesomeIcon icon={faEllipsis} /></HeaderCenterMenu>
        </HeaderCenterRight>
      </HeaderSectionCenter>
      <MessagesListContent>
        <MessageRowComponents message='Mlay le fiainana' profil={Profil} envoyeur={false} />
        <MessageRowComponents message='Tsis fa any aminao' profil={Profil} envoyeur={true} />
        <MessageRowComponents message='Inona n maresaka' profil={Profil} envoyeur={false} />
        <MessageRowComponents message='Za kou cava' profil={Profil} envoyeur={true} />
        <MessageRowComponents message='Cava lesy za a, ar enao?' profil={Profil} envoyeur={false} />
        <MessageRowComponents message='Cava ve enao?' profil={Profil} envoyeur={true} />
        <MessageRowComponents message='Bonjour' profil={Profil} envoyeur={false} />
        <MessageRowComponents message='Bonjour' profil={Profil} envoyeur={true} />
        <MessageRowComponents message='Mlay le fiainana' profil={Profil} envoyeur={false} />
        <MessageRowComponents message='Tsis fa any aminao' profil={Profil} envoyeur={true} />
        <MessageRowComponents message='Inona n maresaka' profil={Profil} envoyeur={false} />
        <MessageRowComponents message='Za kou cava' profil={Profil} envoyeur={true} />
        <MessageRowComponents message='Cava lesy za a, ar enao?' profil={Profil} envoyeur={false} />
        <MessageRowComponents message='Cava ve enao?' profil={Profil} envoyeur={true} />
        <MessageRowComponents message='Bonjour' profil={Profil} envoyeur={false} />
        <MessageRowComponents message='Bonjour' profil={Profil} envoyeur={true} />
      </MessagesListContent>
      <InputZone>
        <InputContent>
          <InputIcon icon={faFile}/>
          <MessageInput type='text' placeholder='Write a message'/>
          <InputIcon icon={faSmile}/>
        </InputContent>
        <ActionZone>
          <MicrophoneIcon icon={faMicrophone}/>
        </ActionZone>
        <ActionZone>
          <ButtonSendIcon icon={faShare}/>
        </ActionZone>
      </InputZone>
    </Center>
  )
}

export default SectionMessage;