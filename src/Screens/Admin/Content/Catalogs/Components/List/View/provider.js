import {memo,useState,createContext,useContext,useEffect} from 'react';
import {ListContext} from "../provider";
export const ViewContext = createContext();
function ViewProvider({state,dispath,displays,children,...props}){
  const Fetch = global.config.useFetch();
  const {controller} = useContext(ListContext);
  function handleGetData({onStart,onEnd}){
    Fetch.get({
      api:"api/admin/"+controller+"/"
      ,params:{
        isTrash:state.inTrash,
        limit:state.view,
        offset:(state.page - 1) * state.view
      },onThen:(result => {
          handle.set("datas",result.data);
      }),onError:(error=> {
          handle.set("datas",[])
      }),onStart,onEnd
    })
  }
  function handleGetLength(){
    Fetch.get({
      api:"api/admin/"+controller+"/count"
      ,params:{
        isTrash:state.inTrash
      },onThen:(result => {
        handle.set("total",result.data)
      }),onError:(error=>{
        handle.set("total",0)
      })
    })
  }
  const handle = {
    set:function(key,value){
      dispath({key:'set',payload:{[key]:value}})
    },refetch:function(){
      handleGetData({});
      handleGetLength();
    }
  };
  useEffect(function(){
    handle.set("datas",[])
  },[state.page,state.inTrash]);
  useEffect(function(){
    handle.set("page",1)
    handle.set("total",0)
  },[state.inTrash]);
  useEffect(function(){
    handleGetData({
      onStart:()=>{
          handle.set("isLoading",true)
      },onEnd:()=>{
          handle.set("isLoading",false)
      }
    });
    handleGetLength();
  },[state.page,state.view,state.inTrash]);
	return(
		<ViewContext.Provider value={{state,displays,handle}}>
			{children}
		</ViewContext.Provider>
	)
}
export default memo(ViewProvider);