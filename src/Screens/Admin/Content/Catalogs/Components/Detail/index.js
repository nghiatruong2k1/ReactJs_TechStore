import {memo,useEffect,useReducer} from 'react';
import {DetailContext,initData,reducer} from "./init";
import styles from './styles.module.css';
function Update({controller,children,id,handle,...props}){
  const Fetch = global.config.useFetch();
  const [state,dispath] = useReducer(reducer,initData);
  const handleData = {
    refetch:function(){
      Fetch.get({
          api:"api/admin/"+controller+"/"+id
          ,onThen:(result => {
            dispath({key:'set',payload:{"data":result.data}})
          }),onError:(error=> {
            dispath({key:'set',payload:{"data":{}}})
          })
        })
    },set:function(key,value){
      dispath({key:'set',payload:{[key]:value}})
    },change:function(key,value){
      if(key){
        dispath({key:'change',payload:{[key]:value}})
      }
    },save:function(){
    	handle.save(state.data)
    }
  }
  useEffect(function(){
      handleData.refetch();
  },[id]);
  return(
    <DetailContext.Provider value={{state,handle:handleData,controller}}>
      {children}
    </DetailContext.Provider>
  )
}
export default memo(Update);