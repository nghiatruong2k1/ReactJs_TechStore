import {memo,createContext,useReducer} from 'react';
import {FormControl} from '@mui/material/';

import {reducer} from "./init";
export const FormContext = createContext();
function FormProvider({values,valids,onSubmit,children,...props}){
  const [state,dispath] = useReducer(reducer,{
    values:values||{},valids:valids||{}
  })
  const handle = {
    setValue:function(name,value){
      dispath({key:"set_value",payload:{[name]:value}})
    },setValid:function(name,value){
      dispath({key:"set_valid",payload:{[name]:value || ""}})
    }
  }
  function handleSubmit(event){
    event.preventDefault();
    onSubmit(state.values,handle);
  }
  return(
    <FormContext.Provider value={{
      values:state.values,valids:state.valids,handle:handle||{}
    }}>
      <FormControl 
        onSubmit={handleSubmit} 
        fullWidth 
        component="form"
        method="post"
      >
        {children}
      </FormControl>
    </FormContext.Provider>
  )
}
export default memo(FormProvider);