import {
  Container,
  AppTitle,
  HeaderStyle,
  ButtonTop,
  Content,
  ListDiscussion,
  DiscussionTitle,
  DiscussionType,
  ChatTypeList,
  PointRed,
  DiscussionSearch,
  DiscussionSearchIcon,
  InputSearchContent,
  InputSearch,
  DiscussionList,
  DiscussionTitleSpan,
  DiscussionBtnAdd,
} from '../styles/HomeStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import Profil from '../assets/images/profil.jpg';
import DiscussionChatItem from '../components/Home/Message/Discussion';
import SectionLeft from '../components/Home/SectionLeft';
import SectionRight from '../components/Home/SectionRight';
import SectionMessage from '../components/Home/Message/SectionMessage';

const HomePage = () => {
  return (
    <Container>
      <HeaderStyle>
        <AppTitle> Chat ONN </AppTitle>
        <ButtonTop> Create memorable talks </ButtonTop>
      </HeaderStyle>

      <Content>
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
            <DiscussionList>
              <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={false} />
              <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={true} />
              <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={false} />
              <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={false} />
              <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={false} />
              <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={1} active={false} />
              <DiscussionChatItem profil={Profil} name="Lionnel Messi" date="12:22 PM" message="Bonjour" numberMessage={18} active={false} />
            </DiscussionList>
          </ListDiscussion>
        </SectionLeft>

        <SectionMessage />
        <SectionRight />

      </Content>

    </Container>
  );
};

export default HomePage;
