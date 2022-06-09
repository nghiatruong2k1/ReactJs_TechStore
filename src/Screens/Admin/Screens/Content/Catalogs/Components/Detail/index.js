import {memo,useEffect,createContext,useContext,useMemo,useReducer,useRef} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import { useSnackbar} from "notistack";
import {checkObject} from "../../../../../../../Config/Validate/";
import {useFetch} from "../../../../../../../Config/Fetch/";
import {getRoute} from "../../../../../../../Config/Route/";

import {initData,reducer} from "./init";
const initEvent = function(){
  const es = [
    "ChangeDatasource",
    "ChangeData",
    "SubmitStart",
    "SubmitEnd",
    "SubmitThen",
    "SubmitError"
  ].reduce(function(result,name){
      if(typeof(result[name]) !== "function"){
        result[name] = [];
      }
      return result;
  },{});
  function add(eventName,callback){
    if(es[eventName]){
      if(typeof(callback) === 'function'){
        const index = es[eventName].findIndex((e)=>(e != callback))
        if(index == -1){
          es[eventName].push(callback)
        }else{
          es[eventName][index] = callback;
        }
      }else {
        console.error(`${callback} is not a function!`);
      }
    }else{
      console.error(`Event ${eventName} not found!`);
    }
  } 
  function remove(eventName,callback){
    if(es[eventName]){
      if(typeof(callback) === 'function'){
        const index = es[eventName].findIndex((e)=>(e != callback))
        if(index == -1){
          delete es[eventName][index];
        }
      }else {
        console.error(`${callback} is not a function!`);
      }
    }else{
      console.error(`Event ${eventName} not found!`);
    }
  } 
  function run(eventName,params){
    if(es[eventName]){
      if(typeof(params) === 'object'){
        es[eventName].forEach((handle)=>{
          handle({
            eventName:eventName,
            target:params
          })
        })
      }else {
        console.error(`${params} is not a object!`);
      }
    }else{
      console.error(`Event ${eventName} not found!`);
    }
  } 
  return {add,remove,run}
};
  async function handleGet({
    Fetch,toast,controller,id,dispath,navigator
  }){
    return await Fetch.get({
      api:"api/admin/"+controller+"/"+id,
      onStart:function(){
        dispath(['set_values',{}]);
        dispath(['set_loading',true]);
      },onEnd:function(){
        dispath(['set_loading',false]);
      },onThen:function(result){
        if(id > 0 && result.status === 204){
          toast({message:"Không tìm thấy dữ liệu!",type:"warning"})
          navigator({
            pathname:getRoute("admin",controller,"index")
          })
        }
        dispath(['set_values',result.data]);
      },onError:function(error){
      }
    });
  }
  async function handleSubmit({
    Fetch,toast,method,controller,values,rulers,dispath,
    events,onEnd,onStart,onError,onThen
  }){
    const error = checkObject(values,rulers,function(name,valids){
      dispath(["change_valids",{[name]:valids[0]}]);
      return (valids.length > 0) ? 1 : 0;
    });
    if(error === 0){
      await Fetch[method]({
        api:"api/admin/"+controller,
        params:{
          ...values
        },onStart:function(){
          dispath(['set_loading',true])
          events.run("SubmitStart",{});
        },onThen:function(result){
          onThen && onThen(result)
          events.run("SubmitThen",result);
        },onError:function(error){
          onError && onError(error)
          events.run("SubmitError",{error});
        },onEnd:function(){
          dispath(['set_loading',false])
          onEnd && onEnd();
          events.run("SubmitEnd",{error});
        }
      });
    }else{
      toast({message:`Hiện đang có ${error} lỗi !!`,type:"error"})
    }
  }

export function handleDetail(){

}
export function useAdd({
  rulers,controller
}){
  const { enqueueSnackbar } = useSnackbar();
  const navigator = useNavigate();
  const Fetch = useFetch();
  const eventRef = useRef(initEvent());
  const [state,dispath] = useReducer(reducer,initData);

  useEffect(function(){
    handleGet({
      Fetch,toast:enqueueSnackbar,navigator,controller,dispath,id:0
    });
  },[controller])
  const handle = {
    refetch:function(){
      handleGet({
        Fetch,toast:enqueueSnackbar,navigator,controller,dispath,id:0
      });
    },
    save:function({onEnd,onStart,onThen,onError}){
      handleSubmit({
        Fetch,toast:enqueueSnackbar,controller,rulers,dispath,events:eventRef.current,
        onEnd,onStart,onError,onThen,
        method:"post",values:{...state.values,Id:0}
      })
    },
    changeValue:function(name,value){
      dispath(["change_values",{[name]:value}]);
    }
  }
  return {state,dispath,handle,controller,events:eventRef.current}
}
export function useUpdate({
  rulers,controller
}){
  const navigator = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const Fetch = useFetch();
  const eventRef = useRef(initEvent());
  const [state,dispath] = useReducer(reducer,initData);
  const {id} = useParams();

  useEffect(function(){
    handleGet({Fetch,toast:enqueueSnackbar,navigator,controller,dispath,id});
  },[controller,id]);

  const handle = {
    refetch:function(){
      handleGet({Fetch,toast:enqueueSnackbar,navigator,controller,dispath,id});
    },
    save:function({onEnd,onStart,onThen,onError}){
      handleSubmit({
        Fetch,toast:enqueueSnackbar,controller,rulers,dispath,events:eventRef.current,
        onEnd,onStart,onError,onThen,
        method:"put",values:state.values
      })
    },
    changeValue:function(name,value){
      dispath(["change_values",{[name]:value}]);
    }
  }
  return {state,dispath,handle,controller,events:eventRef.current}
}

export const DetailContext = createContext();

function DetailProvider({children,state,handle,controller,dispath,events,...props}){
  return(
    <DetailContext.Provider value={{state,handle,controller,dispath,events}}>
      {children}
    </DetailContext.Provider>
  )
}
export default memo(DetailProvider);