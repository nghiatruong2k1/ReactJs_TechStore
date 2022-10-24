import {memo,useReducer,useMemo,useEffect,useRef} from 'react';
import {initData,reducer} from './init';

export default function useAddImage(){
  const [state,dispath] = useReducer(reducer,initData);
  const configRef = useRef({});
  const handle = useMemo(function(){
    return{
      open:function({onClose}){
        configRef.current = {close:onClose};
        dispath(['set_open',true]);
      },close:function(){
        dispath(['set_open',false]);
        console.log(configRef.current);
        configRef.current.close && configRef.current.close();
      }
    }
  },[])
  return {state,handle,config:configRef.current};
}
