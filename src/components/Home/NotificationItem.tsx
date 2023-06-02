import { MentionnedName, MessageUserProfil, NotifGroup, Notification, NotifInfo, NotifTime, UserProfilContent } from "../../styles/HomeStyle";

interface INotificationItem{
  profil: string,
  user: string,
  group: string,
  date: string
}

const NotificationItem = (props: INotificationItem)=>{
  return(
    <Notification>
      <UserProfilContent>
        <MessageUserProfil>
          <img src={props.profil} alt=''/>
        </MessageUserProfil>
      </UserProfilContent>
      <NotifInfo>
        <MentionnedName> @{props.user} </MentionnedName>
        mentioned you in 
        <NotifGroup> {props.group} </NotifGroup>
        <NotifTime> {props.date} ago </NotifTime>
      </NotifInfo>
    </Notification>
  )
}

export default NotificationItem;