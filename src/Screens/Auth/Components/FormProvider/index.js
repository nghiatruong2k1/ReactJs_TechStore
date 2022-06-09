import {memo,createContext,useReducer} from 'react';
import {FormControl} from '@mui/material/';
import { checkObject } from '../../../../Config/Validate';
import {reducer} from "./init";
export const FormContext = createContext();

function FormProvider({values,valids,rules,onSubmit,children,...props}){
  const [state,dispath] = useReducer(reducer,{
    values:values||{},valids:valids||{},isLoading:false
  })
  const handle = {
    setValue:function(name,value){
      dispath(["set_value",{[name]:value}])
    },setValid:function(name,valids){
      dispath(["set_valid",{[name]:valids[0] || ""}])
    },start:function(){
      dispath(["set_loading",true]);
    },end:function(){
      dispath(["set_loading",false]);
    }
  }
  function handleSubmit(event){
    event.preventDefault();
    handle.start();
    const check = checkObject(state.values,rules,function(name,valids){
      handle.setValid(name,valids);
    })
    if(check === 0){
      onSubmit(state.values,handle);
    }else{
      handle.end();
    } 
  }
  return(
    <FormContext.Provider value={{
      ...state,handle:handle||{}
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