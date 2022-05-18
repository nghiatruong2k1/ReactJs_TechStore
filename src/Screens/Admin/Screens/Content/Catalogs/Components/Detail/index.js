import {memo,useEffect,createContext,useContext,useMemo,useReducer} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import styles from './styles.module.css';
import {checkObject} from "../../../../../../../Config/Validate/";
import {useFetch} from "../../../../../../../Config/Fetch/";
import {getRoute} from "../../../../../../../Config/Route/";

import {initData,reducer} from "./init";

  async function handleGet({Fetch,toast,controller,id,dispath,navigator}){
    await Fetch.get({
      api:"api/admin/"+controller+"/"+id,
      onStart:function(){
        dispath(['set_loading',true])
      },onEnd:function(){
        dispath(['set_loading',false])
      },onThen:function({data,status}){
        dispath(['set_values',data]);
        if(id > 0 && status === 204){
          toast.handle.add({message:"Không tìm thấy dữ liệu!",type:"warning"})
          navigator({
            pathname:getRoute("admin",controller,"index")
          })
        }
      }
    });
  }
  async function handleSubmit({Fetch,toast,method,controller,values,rulers,dispath,onEnd}){
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
        },onEnd:function(){
          dispath(['set_loading',false])
          onEnd && onEnd();
        }
      });
    }else{
      toast.handle.add({message:`Hiện đang có ${error} lỗi !!`,type:"error"})
    }
  }

export function useAdd({rulers,controller}){
  const {toast} = useContext(global.config.context);
  const navigator = useNavigate();
  const Fetch = useFetch();
  const [state,dispath] = useReducer(reducer,initData);

  useEffect(function(){
    handleGet({Fetch,toast,navigator,controller,dispath,id:0});
  },[controller])
  const handle = {
    refetch:function(){
      handleGet({Fetch,toast,navigator,controller,dispath,id:0});
    },
    save:function(onEnd){
      handleSubmit({
        Fetch,toast,controller,rulers,dispath,onEnd,
        method:"post",values:state.values
      })
    },
    changeValue:function(name,value){
      dispath(["change_values",{[name]:value}]);
    }
  }
  return {state,dispath,handle,controller}
}
export function useUpdate({rulers,controller}){
  const navigator = useNavigate();
  const {toast} = useContext(global.config.context);
  const Fetch = useFetch();
  const [state,dispath] = useReducer(reducer,initData);
  const {id} = useParams();

  useEffect(function(){
    handleGet({Fetch,toast,navigator,controller,dispath,id});
  },[controller,id]);
  const handle = {
    refetch:function(){
      handleGet({Fetch,toast,navigator,controller,dispath,id});
    },
    save:function(onEnd){
      handleSubmit({
        Fetch,toast,controller,rulers,dispath,onEnd,
        method:"put",values:state.values
      })
    },
    changeValue:function(name,value){
      dispath(["change_values",{[name]:value}]);
    }
  }
  return {state,dispath,handle,controller}
}

export const DetailContext = createContext();

function DetailProvider({children,state,handle,controller,dispath,...props}){
  return(
    <DetailContext.Provider value={{state,handle,controller,dispath}}>
      {children}
    </DetailContext.Provider>
  )
}
export default memo(DetailProvider);