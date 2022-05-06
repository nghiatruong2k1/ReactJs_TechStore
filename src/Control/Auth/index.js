import {useMemo,useReducer} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {initData,reducer} from "./init";
function Auth(){
  const [state,dispath] = useReducer(reducer,initData);
  return useMemo(function(){
    return {
      state:state,
      handle:{
        set:(key,value)=>{
          dispath({key:'set',payload:{[key]:value}})
        },open:function(action){
          dispath({key:'open',payload:action})
        },close:function(){
          dispath({key:'close'})
        },goAction:function(action){
          dispath({key:'go_action',payload:action})
        }
      }
    }
  },[state]);
}
export default Auth;