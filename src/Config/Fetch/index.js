

import {useReducer,useContext,useEffect,useMemo,useRef} from "react";
import DialogResult from "../../Components/DialogResult";
import { useSnackbar} from "notistack";
import axios from "axios";
import {initState,reducer} from "./init";



axios.defaults.withCredentials = true;
axios.defaults.insecureHTTPParser = true;
axios.defaults.credentials = "include";
axios.defaults.xsrfCookieName = "token";
axios.defaults.xsrfHeaderName = "token";
const Base_Url_API = "https://localhost:44373/";

async function showToast(toast,mes,status){
  switch(typeof(mes)){
    case 'string':
    case 'number':{
      break;
    }
    default:{
      if(mes.message.indexOf('Network Error') > -1){
        toast({message:`Kiểm tra lại kết nối mạng!${(status && (" (Mã lỗi "+status+")")) || ""}`,type:"error"});
      }else if(mes.message.indexOf('Request failed') > -1){
        toast({message:`Yêu cầu bị lỗi!${(status && (" (Mã lỗi "+status+")")) || ""}`,type:"error"})
      }else if(mes.message.indexOf("A connection was successfully") > -1){
        toast({message:`Kết nối Database không thành công!${(status && (" (Mã lỗi "+status+")")) || ""}`,type:"error"})
      }else if(mes.message.indexOf("The remote certificate was rejected") > -1){
        toast({message:`Kết nối Database bị từ chối!${(status && (" (Mã lỗi "+status+")")) || ""}`,type:"error"})
      }else{
        await toast(mes);
      }
      break;
    }
  }
}
async function handleError(toast,error){
  if(error.response){
    let mes = "";
    if(error.response.data && error.response.data.InnerException){
      mes = error.response.data.InnerException.Message;
    }else{
      mes = error.message
    }
    showToast(toast,{message:mes,type:"error"},error.response.status)
  }else if(error.message){
    showToast(toast,{message:error.message,type:"error"})
  }
};


async function handleResult(toast,result){
  if(result.data.message){
    if(Array.isArray(result.data.message)){
      result.data.message.forEach(function(message){
        showToast(toast,message)
      })
    }else {
      showToast(result.data.message)
    }
  }
}

async function handleFetch(props,promise,location){
    const {baseUrl,api,params,method} = props;
    const {onStart,onEnd,onThen,onError} = props;
    const {navigator,loading,toast} = props;
    const ourRequest = axios.CancelToken.source();
    let url;
    if(api){
      url = (baseUrl ?? Base_Url_API)+api;
      loading.handle.add();
      typeof(onStart)==="function" && onStart();
      const pro = await promise(url,params,{
        cancelToken: ourRequest.token
      });
      console.log(`[Start ${method}]`,{location,promise:await pro}); 
      pro.then(result => {
            console.log(`[Success ${method}]`,{location,url,result});         
            handleResult(toast,result)
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
        });
    }  
    return await function(){
      console.log(`[Cancel ${method}]`,{location,url,params}); 
      ourRequest && ourRequest.cancel();
    }
}

const handleGet = async function(props,location){
  const promise = async function(url,params,option){
    return await axios.get(url,{params},option)
  };
  return await handleFetch({...props,method:"GET"},promise,location);
}
const handlePut = async function(props,location){
  const promise = async function(url,params,option){
    return await axios.put(url,params,option)
  };
  return await handleFetch({...props,method:"PUT"},promise,location)
}
const handlePost = async function(props,location){
  const promise = async function(url,params,option){
    return await axios.post(url,params,option)
  };
  return await handleFetch({...props,method:"POST"},promise,location)
}
const handleDelete =async function(props,location){
  const promise =async function(url,params,option){
    return await axios.delete(url,params,option)
  }; 
  return await handleFetch({...props,method:"DELETE"},promise,location)  
}

export const useFetch = function(location){
  const {loading} = useContext(global.config.context);
  const { enqueueSnackbar } = useSnackbar();
  return useMemo(function(){
    return {
      get:function(props){
        return handleGet({...props,toast:enqueueSnackbar,loading},location)
      },post:function(props){
        return handlePost({...props,toast:enqueueSnackbar,loading},location)
      },put:function(props){
        return handlePut({...props,toast:enqueueSnackbar,loading},location)
      },delete:function({title,message,...props}){
        DialogResult({
          title,message, 
          onYes:()=>(handleDelete({...props,toast:enqueueSnackbar,loading},location))
        });
      }
    }
  },[location])
}
export const useGet = function(initData,callback,args = [],location){
  const {loading} = useContext(global.config.context);
  const { enqueueSnackbar } = useSnackbar();
  const [state,dispath] = useReducer(reducer,{...initState,data:initData});
  const propsRef = useRef();
  useEffect(function(){
    propsRef.current = callback && callback();
  },[callback])
  useEffect(async function(){
    const {onStart,onEnd,onThen,onError,...props} = propsRef.current;
    return await handleGet({
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
        },...props,toast:enqueueSnackbar,loading
      },location
    );
  },[...args])

  return [state,dispath]
}