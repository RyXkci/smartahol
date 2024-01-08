import { createContext, useReducer} from "react";

export const FormContext = createContext();

const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_SUBMITTED':
      return {...state, isSubmitted: action.payload}
      default:
        return state
  }

}
export function FormProvider({ children }) {

   const [state, dispatch] = useReducer(formReducer, {
   isSubmitted: false
    })

  const changeSubmitted = (submitted) => {
    dispatch({type: "CHANGE_SUBMITTED", payload: submitted})
  }

  return (
    <FormContext.Provider value={{...state, changeSubmitted}}>
      {children}
    </FormContext.Provider>
  );
}
