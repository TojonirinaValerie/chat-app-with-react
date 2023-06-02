import { ListNotifs, ListSuggest, NotifContent, NotificationTitle, Right, SuggestContent, SuggestTitle } from "../../styles/HomeStyle";
import NotificationItem from "./NotificationItem";
import SuggestionItem from "./SuggestionItem";
import Profil from '../../assets/images/profil.jpg';

const SectionRight = ()=>{
  return(
    <Right>
      <NotifContent>
        <NotificationTitle> Notifications </NotificationTitle>
        <ListNotifs>
          <NotificationItem profil={Profil} user='TojonirinaTsilavinaValerie' group='discussion group' date='1 minute'/>
          <NotificationItem profil={Profil} user='TojonirinaTsilavinaValerie' group='discussion group' date='1 minute'/>
          <NotificationItem profil={Profil} user='TojonirinaTsilavinaValerie' group='discussion group' date='1 minute'/>
          <NotificationItem profil={Profil} user='TojonirinaTsilavinaValerie' group='discussion group' date='1 minute'/>
          <NotificationItem profil={Profil} user='TojonirinaTsilavinaValerie' group='discussion group' date='1 minute'/>
          <NotificationItem profil={Profil} user='TojonirinaTsilavinaValerie' group='discussion group' date='1 minute'/>
        </ListNotifs>
      </NotifContent>
      <SuggestContent>
        <SuggestTitle> Suggestions </SuggestTitle>
        <ListSuggest>
          <SuggestionItem profil={Profil} name='Tojonirina Tsilavina Valerie' relation={12} />
          <SuggestionItem profil={Profil} name='Tojonirina Tsilavina Valerie' relation={12} />
          <SuggestionItem profil={Profil} name='Tojonirina Tsilavina Valerie' relation={12} />
          <SuggestionItem profil={Profil} name='Tojonirina Tsilavina Valerie' relation={12} />
          <SuggestionItem profil={Profil} name='Tojonirina Tsilavina Valerie' relation={12} />
          <SuggestionItem profil={Profil} name='Tojonirina Tsilavina Valerie' relation={12} />
        </ListSuggest>
      </SuggestContent>
    </Right>
  )
}

export default SectionRight;