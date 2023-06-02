import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLayout from "../layout/MainLayout/MainLayout";
import { ChatTypeList, DiscussionBtnAdd, DiscussionSearch, DiscussionSearchIcon, DiscussionTitle, DiscussionTitleSpan, DiscussionType, InputSearch, InputSearchContent, ListDiscussion, PointRed } from "../styles/HomeStyle";
import SectionLeft from "../components/Home/SectionLeft";
import DiscussionListComponents from "../components/Home/Message/DiscussionListComponents";
import SectionMessage from "../components/Home/Message/SectionMessage";
import SectionRight from "../components/Home/SectionRight";

const ChatPage = () => {
  return(
    <MainLayout>
      
      <SectionLeft>
        <ListDiscussion>
          <DiscussionTitle>
            <DiscussionTitleSpan> Chats </DiscussionTitleSpan>
            <DiscussionBtnAdd>
              <FontAwesomeIcon icon={faPlus} />
            </DiscussionBtnAdd>
          </DiscussionTitle>
          <DiscussionType>
            <ChatTypeList active={true}>
              Direct <PointRed />
            </ChatTypeList>
            <ChatTypeList>
              Group <PointRed />
            </ChatTypeList>
            <ChatTypeList>
              Public <PointRed />
            </ChatTypeList>
          </DiscussionType>
          <DiscussionSearch>
            <div>
              <DiscussionSearchIcon icon={faSearch}></DiscussionSearchIcon>
            </div>
            <InputSearchContent>
              <InputSearch type="text" placeholder="Search" />
            </InputSearchContent>
          </DiscussionSearch>
          <DiscussionListComponents />
        </ListDiscussion>
      </SectionLeft>

      <SectionMessage />

      <SectionRight />
      
    </MainLayout>
  )
}

export default ChatPage;