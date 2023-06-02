import { ChatHeure, ChatMessageNumber, ChatUserInfo, ChatUserMessage, ChatUserName, ChatUserProfil, ChatUserProfilContent, Discussion, GreenDot, ImgChatUserProfil, MessageNumber, NameHeure } from "../../../styles/HomeStyle";

interface IDiscussionChatItem {
  profil: string;
  name: string;
  date: string;
  message: string;
  numberMessage: number;
  active: boolean
}

const DiscussionChatItem = (props: IDiscussionChatItem) => {
  return(
    <Discussion active={props.active}>
      <ChatUserProfilContent>
        <ChatUserProfil>
          <ImgChatUserProfil src={props.profil}/>
        </ChatUserProfil>
        <GreenDot/>
      </ChatUserProfilContent>
      <ChatUserInfo>
        <NameHeure> 
          <ChatUserName active={props.active}> {props.name} </ChatUserName>
          <ChatHeure active={props.active}> {props.date} </ChatHeure>
        </NameHeure>
        <MessageNumber>
          <ChatUserMessage>
            {props.message}
          </ChatUserMessage>
          <ChatMessageNumber isPlus={props.numberMessage>9 && true}>
            {props.numberMessage>9 ? '+9' : props.numberMessage}
          </ChatMessageNumber>
        </MessageNumber>
      </ChatUserInfo>

    </Discussion>
  )
}

export default DiscussionChatItem;