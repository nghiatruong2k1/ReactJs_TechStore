import {useMemo,useReducer,useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {initData,reducer} from "./init";
import {useFetch} from "../../../Config/Fetch/";
function Auth(){
  const [state,dispath] = useReducer(reducer,initData);
  const Fetch = useFetch();
  const [cookies,setCookies,removeCookies] = useCookies();
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
          dispath(['set_user',null]);
          removeCookies("token")
        },goAction:function(action){
          dispath(['set_action',action])
        }
      }
  },[state]);
  useEffect(function(){
    console.log(cookies['token'],Boolean(cookies['token']),typeof(cookies['token']))
    if(Boolean(cookies['token']) 
      && typeof(cookies['token']) == 'string' 
      && cookies['token'] != 'undefined'
      && cookies['token'] != 'null'
      && cookies['token'] != ''
    ){
      Fetch.get({
        api:"api/user",
        onThen:function(result){
          if(typeof(result.data) === 'object'){
            dispath(['set_user',result.data]);
          }else{
            dispath(['set_user',null]);
            removeCookies('token')
          }
        },onError:function(){
          dispath(['set_user',null])
        },onStart:function(){
          dispath(['set_loading',true])
        },onEnd:function(){
          dispath(['set_loading',false])
        }
      })
    }else{
      dispath(['set_user',null]);
    }
  },[cookies['token']])
  return {state,handle}
}
export default Auth;