import {memo,useReducer,useMemo,useEffect,useRef} from 'react';
import {initData,reducer} from './init';

export default function useUploadImage(){
  const [state,dispath] = useReducer(reducer,initData);
  const configRef = useRef();
  const handle = useMemo(function(){
    return{
      open:function({onSubmit,onCancel,defaultData,location}){
        configRef.current = {onSubmit,onCancel,defaultData,location};
        dispath(['set_open',true]);
      },close:function(){
        dispath(['set_open',false]);
      }
    }
  },[])
  return {state,handle,config:configRef.current};
}
