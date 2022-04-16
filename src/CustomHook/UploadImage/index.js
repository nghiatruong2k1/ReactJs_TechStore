import {useReducer} from 'react';
import {initData,reducer} from './init';
function useUploadImage(){
  const [state,dispath] = useReducer(reducer,initData);
  const handle = {
    set:(key,value)=>{
      dispath({key:'set',payload:{[key]:value}})
    },open:function({onCancel,onSubmit,...props}){
      dispath({key:'open',payload:{onCancel,onSubmit}})
      dispath({key:'select',payload:props})
    },close:function(){
      dispath({key:'close'})
    },select:(props)=>{
      dispath({key:'select',payload:props})
    },cancel:()=>{
      state.event.onCancel && state.event.onCancel();
    },submit:()=>{
      state.event.onSubmit && state.event.onSubmit(state.select)    
    }
  }
  return {state,handle}
}
export default useUploadImage;