import { MessageUserProfil, SuggestButtonAdd, SuggestButtonContent, SuggestInfo, SuggestInfoName, SuggestInfoRelation, Suggestion, UserProfilContent } from "../../styles/HomeStyle";

interface ISuggestionItem{
  profil: string,
  name: string,
  relation: number
}

const SuggestionItem = (props: ISuggestionItem)=>{
  return(
    <Suggestion>
      <UserProfilContent>
        <MessageUserProfil>
          <img src={props.profil} alt=''/>
        </MessageUserProfil>
      </UserProfilContent>
      <SuggestInfo>
        <SuggestInfoName> {props.name} </SuggestInfoName>
        <SuggestInfoRelation> {props.relation} amis en commun </SuggestInfoRelation>
      </SuggestInfo>
      <SuggestButtonContent>
        <SuggestButtonAdd> Add </SuggestButtonAdd>
      </SuggestButtonContent>
    </Suggestion>
  )
}

export default SuggestionItem;