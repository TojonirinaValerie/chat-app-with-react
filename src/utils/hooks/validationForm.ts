import { useEffect, useState } from "react"
import { FormControlInputText } from "../../components/Signup/SignUp"

// export const useValidFormText = (regex: RegExp, errorMessage: string)=>{

//   const [inputText, setValue] = useState<FormControlInputText>({
//     value: '',
//     isValid: false,
//     isTouched: false,
//     error: false,
//     errorMessage: '',
//   });

//   useEffect(() => {
//     setValue( (oldValue) => ({
//       ...oldValue,
//       error: !regex.test(inputText.value),
//       errorMessage: errorMessage
//     }));

//   }, [inputText.value]);
  
//   return [inputText, setValue];
// }