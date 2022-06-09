import {useMemo,useReducer,useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {initData,reducer} from "./init";
import {useFetch} from "../../../Config/Fetch/";
function Auth(){
  const [state,dispath] = useReducer(reducer,initData);
  const [cookies,setCookies,deleteCookies] = useCookies(["token"])
  const Fetch = useFetch();
  const handle = useMemo(function(){
    return {
        set:(key,value)=>{
          dispath(['set',{[key]:value}])
        },open:function(action){
          dispath(['open',action])
        },close:function(){
          dispath(['close'])
        },login:function(token){    
          setCookies("token",token);
        },logout:function(){
          deleteCookies("token");
        },goAction:function(action){
          dispath(['set_action',action])
        }
      }
  },[state]);
  useEffect(async function(){
    if(cookies['token']){
      return await Fetch.get({
        api:"api/user",
        onThen:function({data}){
          if(typeof(data) === 'object'){
            dispath(['set_user',data]);
          }else{
            deleteCookies("token");
            dispath(['set_user',null]);
          }
        },onError:function(){
          dispath(['set_user',null])
        },onStart:function(){
          dispath(['set_loading',true])
        },onEnd:function(){
          dispath(['set_loading',false])
        }
      });
    }else{
      dispath(['set_user',null])
    }
  },[cookies['token']])
  return {state,handle}
}
export default Auth;