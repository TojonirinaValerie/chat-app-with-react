import { DiscussionList } from "../../../styles/HomeStyle";
import DiscussionChatItem from "./Discussion";
import Profil from '../../../assets/images/profil.jpg';

const DiscussionListComponents = ()=>{
  return(
    <DiscussionList>
      <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={false} />
      <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={true} />
      <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={false} />
      <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={false} />
      <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={false} />
      <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={false} />
      <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={18} active={false} />
    </DiscussionList>
  )
}

export default DiscussionListComponents;