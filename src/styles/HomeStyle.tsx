import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { color, displayFlexColumn, displayFlexRow } from './variables';


const headerSectionStyle = `
  height: 50px;
  min-height: 50px;
  padding: 5px 0;
  background-color: ${color.white};
  box-shadow: 1px 5px 20px ${color.shadowWhite};
`;

const titleSection = `
  font-weight: bold;
  font-size: 1.4em;
`;

const chatTypeActive = `
  color: ${color.black};
`;
const chatTypeNonActive = `
  color: ${color.greyLight}
`;

const displayNameHeureAndMessageNumber = `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;


export const Container = styled.div`
  ${displayFlexColumn}
  height: 100% !important;
`;

export const HeaderStyle = styled.div`
  ${displayFlexRow}
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: ${color.white};
  box-shadow: 0px 0px 20px ${color.shadowWhite};
`;

export const AppTitle = styled.div`
  margin: 0 20px;
  color: ${color.black};
  font-weight: bolder;
  font-size: 1.4em;
  cursor: pointer;
`;

export const ButtonTop = styled.div`
  margin: 0 20px;
  color: ${color.greyLight};
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    color: ${color.purpleLight};
  }
`;

export const Content = styled.div`
  height: calc(100% - 50px);
  ${displayFlexRow}
`;

export const Left = styled.div`
  ${displayFlexColumn}
  width: 25%;
  min-width: 25%;
`;

export const HeaderSectionLeft = styled.ul`
  ${displayFlexRow}
  ${headerSectionStyle}
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  margin: 0;
  font-size: 1.2em;
  color: ${color.greyDark};
`;

const menuListStyle = `
  cursor: pointer;
  padding: 0 5px;
  &:hover {
    color: ${color.purpleDark};
  }
`

export const MenuList = styled.li`
  ${menuListStyle}
`;

export const MenuListProfil = styled.li`
  ${menuListStyle}
  height: 40px;
  width: 40px;
  padding: 0;
  overflow: hidden;
  border-radius: 50%;
`;

export const ListDiscussion = styled.div`
  ${displayFlexColumn}
  height: calc(100% - 60px);
  padding: 0 20px;
`;

export const DiscussionTitle = styled.div`
    ${displayFlexRow}
    justify-content: space-between;
    padding-top: 10px;
    cursor: default;
`;

export const DiscussionTitleSpan = styled.span`
  ${titleSection}
`;

export const DiscussionBtnAdd = styled.span`
  font-size: 0.8em;
  cursor: pointer;
`

export const DiscussionType = styled.div`
    ${displayFlexRow}
    margin: 5px 0;
`;

export const ChatTypeList = styled.div<{active?: boolean}>`
    ${displayFlexRow}
    ${ ({active}) => (active ? chatTypeActive : chatTypeNonActive)};
    margin-right: 10px;
    font-weight: bold;
    font-size: 0.8em;
    cursor: pointer;
    &:hover{
        color: ${color.purpleDark};
    }
`;

export const PointRed = styled.div`
    width: 5px;
    height: 5px;
    background-color: ${color.redNotif};
    border-radius: 50%;
    margin: 5px 5px;
`;

export const DiscussionSearch = styled.div`
  background-color: ${color.white};
  border-radius: 25px;
  box-shadow: 0px 0px 15px ${color.shadowWhite};
  margin: 5px 0;
  padding: 5px;
  padding-left: 15px;
  padding-right: 25px;
  font-weight: bold;
  font-size: 1em;
  display: flex;
  flex-direction: row;
`;

export const DiscussionSearchIcon = styled(FontAwesomeIcon)`
  color: ${color.greyDark};
  cursor: pointer;
`;

export const InputSearchContent = styled.div`
  color: ${color.greyLight};
  width: 100%;
`;

export const InputSearch = styled.input`
  border: none;
  width: 100%;
  margin: 0 10px;
  background-color: ${color.white};
  color: ${color.greyDark};
  font-weight: bold;
  &::placeholder{
      color: ${color.greyLight};
  }
`;

export const DiscussionList = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const Discussion = styled.li<{active?: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 0px 15px ${color.shadowWhite};
  padding: 10px 5px;
  margin: 8px 0px;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  background-color: ${ ({active}) => (active ? color.bgBlack : color.white)};
  &:hover{
    background-color: ${ ({active}) => (active ? color.bgBlack : color.white1)};
  }
`;

export const ChatUserProfilContent = styled.div`
  position: relative;
`;

export const ChatUserProfil = styled.div`
  height: 35px;
  width: 35px;
  overflow: hidden;
  margin: 0px 5px;
`;

export const ImgChatUserProfil = styled.img`
  width: 100%;
  border-radius: 100%;
`;

export const GreenDot = styled.div`
  position: absolute;
  bottom: 0px;
  right: 5px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${color.green};
  border: 2px ${color.white} solid;
`;

export const ChatUserInfo = styled.div`
  width: calc(100% - 50px);
`;

export const NameHeure = styled.div`
  ${displayNameHeureAndMessageNumber}
`;

export const MessageNumber = styled.div`
  ${displayNameHeureAndMessageNumber}
`;

export const ChatUserName = styled.div<{active?: boolean}>`
  width: 70%;
  font-weight: bold;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${ ({active}) => (active ? color.white : color.black) };

  @media screen and(max-width:1200px) {
      width: 60%;
  }
  @media screen and(max-width:980px) {
      width: 50%;
  }
`;

export const ChatHeure = styled.div<{active?: boolean}>`
  font-weight: bold;
  font-size: 0.8em;
  color: ${ ({active}) => (active ? color.greyLight : color.black) };
`;

export const ChatUserMessage = styled.div`
  color: ${color.greyDark};
  width: 85%;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const plusNine = `
  font-size: 0.6em;
  padding: 5px;
`;
const moinsNine = `
  padding: 1px 6px;
  padding-bottom: 2px;
  font-size: 0.7em;
`
export const ChatMessageNumber = styled.div<{isPlus?: boolean}>`
  background-color: ${color.redNotif};
  color: ${color.white};
  border-radius: 50%;
  font-weight: bold;
  ${ ({isPlus}) => (isPlus ? plusNine : moinsNine) }

`;

export const Center = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const HeaderSectionCenter = styled.div`
  ${headerSectionStyle}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderCenterLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
`;

export const MessageUserProfil = styled.div`
  height: 35px;
  width: 35px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
`;

export const MessageUserInfo = styled.div`
  margin-left: 10px;
`;

export const UserName = styled.div`
  font-weight: bold;
  color: ${color.black};
  cursor: pointer;
`;

export const UserLastConnex = styled.div`
  font-weight: bold;
  color: ${color.greyDark};
  font-size: 0.8em;
  cursor: default;
`;

export const HeaderCenterRight = styled.ul`
  display: flex;
  flex-direction: row;
  padding-right: 20px;
  margin: 0;
  font-size: 1em;
  color: ${color.greyDark};
`;

export const HeaderCenterMenu = styled.li`
  margin: 0 5px;
  padding: 0 5px;
  cursor: pointer;
  &:hover{
      color: ${color.purpleDark};
  }
`;

export const MessagesListContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  margin-top: 10px;
  overflow: auto;
`;

export const MessageRow = styled.div<{reverse: boolean}>`
  display: flex;
  flex-direction: ${({reverse}) => ( reverse ? 'row-reverse' : 'row')};
  align-items: flex-end;
  padding: 10px;
`;

export const MessageContent = styled.div<{reverse: boolean}>`
  background-color: ${({reverse}) => (reverse ? color.purpleLight : color.bgWhite1)} ;
  color: ${({reverse}) => (reverse ? color.white : color.black)} ;
  padding: 5px 25px;
  max-width: 60%;
  border-radius: ${({reverse}) => (reverse ? '20px 20px 0px 20px' : '20px 20px 20px 0px')};
  cursor: default;
`;

export const InputZone = styled.div`
  background-color: ${color.white};
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // box-shadow: 0px -5px 5px ${color.white1};
  color: ${color.greyDark};
`;

export const InputContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${color.white};
  border-radius: 50px;
  padding: 5px 15px;
`;

export const MessageInput = styled.input`
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0);
  padding: 5px 10px;
  font-size: 0.8em;
  border: none;
  box-shadow: none;
  font-weight: bold;
  color: ${color.bgBlack};
  &::placeholder{
      color: ${color.greyDark}
  }
`;

export const InputIcon = styled(FontAwesomeIcon)`
  padding: 0 5px;
  cursor: pointer;
  &:hover{
      color: ${color.purpleDark};
  }
`;

export const ActionZone = styled.div`
  padding: 5px 15px;
`;

const actionIcon = `
  cursor: pointer;
  &:hover{
      color: ${color.purpleDark};
  }
`;

export const MicrophoneIcon = styled(FontAwesomeIcon)`
  ${actionIcon}
`;

export const ButtonSendIcon = styled(FontAwesomeIcon)`
  ${actionIcon}
  color: ${color.purpleLight};
`

export const Right = styled.div`
  width: 25%;
  min-width: 25%;
  display: flex;
  flex-direction: column;
`;

const notifAndSuggestContent = `
  height: calc(50% - 20px);
  // overflow-y: scroll;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const NotifContent = styled.div`
  ${notifAndSuggestContent}
`;

export const SuggestContent = styled.div`
  ${notifAndSuggestContent}
`

export const NotificationTitle = styled.div`
  ${titleSection}
`;

export const ListNotifs = styled.ul`
  height: 100%;
  overflow-y: scroll;
`;

export const Notification = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  margin: 8px 0px;
  font-size: 1em;
  cursor: pointer;
  &:hover{
      background-color: ${color.white1};
  }
`;

export const UserProfilContent = styled.div`
  
`;

export const NotifInfo = styled.div`
  margin-left: 3px;
  font-size: 0.9em;
`;

export const MentionnedName = styled.span`
  color: ${color.blueTags};
`;

export const NotifGroup = styled.span`
  
`;

export const NotifTime = styled.span`
  font-weight: bold;
  font-size: 0.8em;
  color: ${color.greyDark};
  padding-left: 15px;
`;

export const SuggestTitle = styled.div`
  ${titleSection}
`;

export const ListSuggest = styled.ul`
  height: 100%;
  overflow: auto;
`;

export const Suggestion = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 8px 0px;
  font-size: 1em;
  cursor: default;
`;

export const SuggestInfo = styled.div`
  width: 100%;
`;

export const SuggestInfoName = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

export const SuggestInfoRelation = styled.div`
  color: ${color.greyDark};
  font-size: 0.8em;
`;

export const SuggestButtonContent = styled.div`
  margin: 0 10px;
`;

export const SuggestButtonAdd = styled.button`
  border-radius: 50px;
  padding: 5px 10px;
  background-color: ${color.purpleLight};
  color: ${color.white};
  font-weight: bold;
  cursor: pointer;
  &:hover{
      background-color: ${color.purpleDark};
  }
`;