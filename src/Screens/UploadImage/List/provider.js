import {memo,useState,createContext,useContext,useEffect} from 'react';
import { useFetch } from '../../../Config/Fetch/';
export const ListContext = createContext();

function ListProvider({state,dispath,children,...props}){
  const Fetch = useFetch();
  async function handleGetData({onStart,onEnd}){
    await Fetch.get({
      api:"api/admin/image/",
      params:{
        isTrash:false,
        limit:state.limit,
        offset:(state.page - 1) * state.limit
      },onThen:(result => {
          dispath(["datas",result.data]);
      }),onError:(error=> {
          dispath(["datas",[]]);
      }),onStart,onEnd
    })
  }
  async function handleGetLength(){
    await Fetch.get({
      api:"api/admin/image/count",
      params:{
        isTrash:false
      },onThen:(result => {
        dispath(["total",result.data]);
      }),onError:(error=>{
        dispath(["total",0]);
      })
    })
  }
  const handle = {
    set:function(key,value){
      dispath([key,value])
    },get:function(obj){
      handleGetData(obj || {});
      handleGetLength();
    }
  }
  useEffect(function(){
    handleGetData({
        onStart:function(){
          dispath(['datas',Array(state.limit ?? 1).fill(undefined)]);
          dispath(['isLoading',true])
        },onEnd:function(){
          dispath(['isLoading',false])
        }
    });
  },[state.page,state.limit]);
  useEffect(function(){
    handleGetLength();
  },[state.limit]);
	return(
		<ListContext.Provider value={{state,handle}}>
			{children}
		</ListContext.Provider>
	)
}
export default memo(ListProvider);