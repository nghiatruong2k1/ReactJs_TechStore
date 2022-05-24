

import {useReducer,useContext,useEffect,useMemo,useRef} from "react";
import DialogResult from "../../Components/DialogResult";
import axios from "axios";
import {initState,reducer} from "./init";



axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";
axios.defaults.xsrfCookieName = "token";
axios.defaults.xsrfHeaderName = "token";

const Base_Url_API = "https://localhost:44373/";

function showToast(toast,mes){
  switch(mes.message){
    case 'Network Error':{
      toast.handle.add({...mes,message:"Kiểm tra lại kết nối mạng!",type:"error"});
      break;
    }
    case 'Request failed with status code 404':{
      toast.handle.add({...mes,message:"Yêu cầu bị lỗi!",type:"error"});
      break;
    }
    default:{
      toast.handle.add(mes);
      break;
    }
  }
}
function handleError(toast,error){
  if(error.response){
    let mes = "";
    if(error.response.data && error.response.data.InnerException){
      mes = error.response.data.InnerException.Message;
    }else{
      mes = error.message
    }
    mes +=` (mã lỗi ${error.response.status})`;
    showToast(toast,{message:mes,type:"error"})
  }else if(error.message){
    showToast(toast,{message:error.message,type:"error"})
  }
}

async function handleFetch(props,promise,location){
    const {baseUrl,api,params,method} = props;
    const {onStart,onEnd,onThen,onError} = props;
    const {navigator,loading,toast} = props;
    
    if(api){
      const url = (baseUrl ?? Base_Url_API)+api;
      console.log(`[Start ${method}]`,{location,url,params}); 
      loading.handle.add();
      typeof(onStart)==="function" && onStart();
      return await promise(url,params)
        .then(result => {
            console.log(`[Success ${method}]`,{location,url,result});         
            if(result.data.message){
              if(Array.isArray(result.data.message)){
                result.data.message.forEach(function(message){
                  toast.handle.add(message);
                })
              }else if(typeof(result.data.message) === "object"){
                toast.handle.add(result.data.message);
              }else if(typeof(result.data.message) === "string"){
                toast.handle.add({message:result.data.message,type:"info"});
              }
            }
            typeof(onThen)==="function" && onThen(result);
        })
        .catch(error=> {
            console.log(`[Error ${method}]`,{location,url,error});   
            handleError(toast,error);        
            typeof(onError)==="function" && onError(error);
        })
        .finally(()=>{
          loading.handle.remove();
          typeof(onEnd)==="function" && onEnd();
        })
    }  
}

const handleGet = async function(props,location){
  const promise = async function(url,params){
    return await axios.get(url,{params})
  };
  return await handleFetch({...props,method:"GET"},promise,location);
}
const handlePut = async function(props,location){
  const promise = async function(url,params){
    return await axios.put(url,params)
  };
  return await handleFetch({...props,method:"PUT"},promise,location)
}
const handlePost = async function(props,location){
  const promise = async function(url,params){
    return await axios.post(url,params)
  };
  return await handleFetch({...props,method:"POST"},promise,location)
}
const handleDelete =async function(props,location){
  const promise =async function(url,params){
    return await axios.delete(url,params)
  }; 
  return await handleFetch({...props,method:"DELETE"},promise,location)  
}

export const useFetch = function(location){
  const {loading,toast} = useContext(global.config.context);
  return useMemo(function(){
    return {
      get:function(props){
        handleGet({...props,toast,loading},location)
      },post:function(props){
        handlePost({...props,toast,loading},location)
      },put:function(props){
        handlePut({...props,toast,loading},location)
      },delete:function({title,message,...props}){
        DialogResult({
          title,message, 
          onYes:()=>(handleDelete({...props,toast,loading},location))
        });
      }
    }
  },[location])
}
export const useGet = function(initData,callback,args = [],location){
  const {loading,toast} = useContext(global.config.context);
  const [state,dispath] = useReducer(reducer,{...initState,data:initData});
  const propsRef = useRef();
  useEffect(function(){
    propsRef.current = callback && callback();
  },[callback])
  useEffect(function(){
    const {onStart,onEnd,onThen,onError,...props} = propsRef.current;
      handleGet({
        onStart:function(){
          dispath(["set_loading",true])
          if(onStart){
            dispath(["set_data",onStart() ?? initData])
          }
        },onEnd:function(){
          dispath(["set_loading",false])
          onEnd && onEnd();
        },onThen:function(result){
          dispath(["set_error",false])
          if(onThen){
            dispath(["set_data",onThen(result) ?? initData])
          }else{
            dispath(["set_data",result.data ?? initData])
          }      
        },onError:function(error){
          dispath(["set_error",true])
          if(onError){
            dispath(["set_data",onError(error) ?? initData])
          }else{
            dispath(["set_data",initData])
          }
        },...props,toast,loading
      },location
    );
    return function(){
      
    }
  },[...args])

  return [state,dispath]
}