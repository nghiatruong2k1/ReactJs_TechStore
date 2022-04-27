

import {useContext} from "react";
import DialogResult from "../Components/DialogResult/";

import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.credentials = "include";
axios.defaults.xsrfCookieName = "token";
axios.defaults.xsrfHeaderName = "token";

export const useFetch = function(location){
  const {loading,toast} = useContext(global.config.context);
  return {
    get:function(props){
      handleGet({...props,location,toast,loading})
    },post:function(props){
      handlePost({...props,location,toast,loading})
    },put:function(props){
      handlePut({...props,location,toast,loading})
    },delete:function({title,message,...props}){
      DialogResult({
        title,message, 
        onYes:()=>(handleDelete({...props,location,toast,loading}))
      });
    }
  }
}


async function handleFetch(props){
    const {api,params,method,promise} = props;
    const {navigator,loading,toast,location} = props;
    const {onStart,onEnd,onThen,onError} = props;
    const url = global.config.Base_Url_API+api;
    console.log(`[Start ${method}]`,{location,url,params});
    loading.handle.add();
    if(onStart && typeof(onStart)==="function"){
      onStart();
    };
    return await promise(url,params)
      .then(result => {
          console.log(`[Success ${method}]`,{location,url,result});
          
          if(result.data.message && Array.isArray(result.data.message)){
            result.data.message.forEach(function(message){
              toast.handle.add(message);
            })
          }
          if(onThen && typeof(onThen)==="function"){
            onThen(result);
          }
      })
      .catch(error=> {
          console.log(`[Error ${method}]`,{location,url,error});
          if(!error.response){
            toast.handle.add({message:"Lỗi kết nỗi Server",type:"error"});
          }else{
            switch (error.response.status) {
              case 400:
                toast.handle.add({message:"Lỗi kết nỗi Server",type:"error"});
                break;
              default:
                // statements_def
                break;
            }
          }               
          if(onError && typeof(onError)==="function"){
            onError(error);
          }
      })
      .finally(()=>{
        loading.handle.remove();
        if(onEnd && typeof(onEnd)==="function"){
          onEnd();
        }
      })
}
export const handleGet =async function({...props}){
    const promise = async function(url,params){
      return await axios.get(url,{params})
    };
    await handleFetch({...props,promise,method:"GET",timedelay:1000})
}
export const handlePut =async function({...props}){
    const promise =async function(url,params){
      return await axios.put(url,params)
    };
    handleFetch({...props,promise,method:"PUT"})
}
export const handlePost =async function({...props}){
    const promise =async function(url,params){
      return await axios.post(url,params)
    };
    handleFetch({...props,promise,method:"POST"})
}
export const handleDelete =async function({...props}){
    const promise =async function(url,params){
      return await axios.delete(url,params)
    }; 
    handleFetch({...props,promise,method:"DELETE"})  
}
