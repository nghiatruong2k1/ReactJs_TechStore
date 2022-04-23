import {memo,useEffect,useContext,useReducer} from 'react';
import {DetailContext,initData,reducer} from "./init";
import styles from './styles.module.css';
function DetailProvider({controller,children,rulers,id,handle,...props}){
  const Fetch = global.config.useFetch();
  const [state,dispath] = useReducer(reducer,initData);
  const {toast} = useContext(global.config.context);
  const {checkObject} = global.config.useValidate();
  const handleData = {
    refetch:function(){
      Fetch.get({
          api:"api/admin/"+controller+"/"+id
          ,onThen:(result => {
            dispath({key:'set',payload:{"data":result.data || {}}})
          }),onError:(error=> {
            dispath({key:'set',payload:{"data":{}}})
          })
        })
    },set:function(key,value){
      dispath({key:'set',payload:{[key]:value}})
    },change:function(key,value){
      dispath({key:'change',payload:{[key]:value}})
    },validate:function(name,message){
      dispath({key:"set_valid",payload:{[name]:message || ""}})
    },save:function(){
      if(rulers){
          const error = checkObject(state.data,rulers,function(name,message){
            dispath({key:"set_valid",payload:{[name]:message || ""}})
          })
          if(error == 0){
            handle.save(state.data)
          }else{
            toast.handle.add({message:`Bạn đang có ${error} lỗi!`,type:"error"})
          }
        }else{
          handle.save(state.data)
        }
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
export default memo(DetailProvider);