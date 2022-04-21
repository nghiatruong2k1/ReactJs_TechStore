import {memo,useState,createContext,useContext,useEffect} from 'react';
import axios from 'axios';
export const ListContext = createContext();
function ListProvider({state,dispath,children,...props}){
  const Fetch = global.config.useFetch();
  function handleGetData({onStart,onEnd}){
    Fetch.get({
      api:"api/admin/image/",
      params:{
        isTrash:false,
        limit:state.view,
        offset:(state.page - 1) * state.view
      },onThen:(result => {
          handle.set("datas",result.data);
      }),onError:(error=> {
          handle.set("datas",[]);
      }),onStart,onEnd
    })
  }
  function handleGetLength(){
    Fetch.get({
      api:"api/admin/image/count",
      params:{
        isTrash:false
      },onThen:(result => {
        handle.set("total",result.data);
      }),onError:(error=>{
        handle.set("total",0);
      })
    })
  }
  const handle = {
    set:function(key,value){
      dispath({key:'set',payload:{[key]:value}})
    },get:function(){
      handleGetData({
        onStart:function(){
          handle.set("datas",Array(state.view ?? 1).fill(undefined));
          dispath({key:'set',payload:{isLoading:true}})
        },onEnd:function(){
          dispath({key:'set',payload:{isLoading:false}})
        }
      });
      handleGetLength();
    },refetch:function(){
      handleGetData({});
      handleGetLength();
    }
  }
  useEffect(function(){
    handle.set("datas",[])
  },[state.page]);
  useEffect(function(){
    handle.get();
  },[state.page,state.view]);
	return(
		<ListContext.Provider value={{state,handle}}>
			{children}
		</ListContext.Provider>
	)
}
export default memo(ListProvider);