import {memo,forwardRef,createContext,useRef,useReducer} from 'react';
import {FormControl} from '@mui/material/';


export const FormContext = createContext();
function FormProvider({onSubmit,children,...props}){

  function handleSubmit(event){
    event.preventDefault();
    if(onSubmit && typeof(onSubmit) == 'function'){
      const state = Array.from(event.target).reduce(function(result,element){
        if(Boolean(element.name)){
          result.element[element.name] = element;
          switch(element.type){
            case 'checkbox':
            case 'radio':{
              result.value[element.name] = element.checked;
              break;
            }
            default:{
              result.value[element.name] = element.value;
              break;
            }
          }
        }
        return result;
      },{element:{},value:{}})
      onSubmit(event,state)
    }
  }
  return(
    <>
      <FormControl 
        onSubmit={handleSubmit} 
        fullWidth 
        component="form"
        method="post"
      >
        {children}
      </FormControl>
    </>
  )
}
export default memo(FormProvider);