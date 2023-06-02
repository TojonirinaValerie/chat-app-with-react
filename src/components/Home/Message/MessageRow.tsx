import { MessageContent, MessageRow, MessageUserProfil } from "../../../styles/HomeStyle";

interface IMessageRowComponents {
  profil: string;
  message: string;
  envoyeur: boolean
}

const MessageRowComponents = (props: IMessageRowComponents)=>{
  return (
    <MessageRow reverse={props.envoyeur}>
      <MessageUserProfil>
        <img src={props.profil} alt="" />
      </MessageUserProfil>
      <MessageContent reverse={props.envoyeur}>
        {props.message}
      </MessageContent>
    </MessageRow>
  );
}

export default MessageRowComponents;