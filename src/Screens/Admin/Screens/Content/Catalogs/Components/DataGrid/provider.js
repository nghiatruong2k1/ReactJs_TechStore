import {memo,createContext,useContext,useEffect,useMemo,useReducer,useState} from 'react';
import { useFetch } from '../../../../../../../Config/Fetch/';
import { getRoute } from '../../../../../../../Config/Route/';
import {reducer,initData,reducerDisplay}                from './init';

export const DataContext = createContext();
export function useInitData(callback,args = []){
  const [state,dispath] = useReducer(reducer,initData);
  const Fetch = useFetch();
  const {onChange} = useMemo(function(){
    if(typeof(callback) === 'function'){
      return callback() ?? {};
    }else if(typeof(callback) === 'object'){
      return callback;
    }else{
      return {}
    }
  },[...args]);
  useEffect(function(){
    dispath(['set_page',1])
    dispath(['set_datas',[]])
  },[...args])

  useEffect(function(){
    dispath(['set_total',state.datas.length]);
    onChange && onChange(state.datas);
  },[state.datas]);

  const handle = {
    refetch:function(){
      dispath(['set_datas',[]])
    },setPage:function(page){
      dispath(['set_page',page])
    },setTrash:function(trash){
      dispath(['set_trash',trash])
    },addData:function(data){
      dispath(['set_datas',[data,...state.datas]])
    },removeData:function(data){
      dispath(['set_datas',[data,...state.datas]])
    },changeData:function(data){
      
    }
  };
  const option = {
    trashProps:{
      hidden:true
    }
  }
  const dataset = {
    updateProps:function(data){
      return {
        
      }
    },publicProps:function(data,setLoading){
      return {
        onClick:function(){
           
        }
      }
    },trashProps:function(data,setLoading){
      return {
        title:"Xóa",
        onClick:function(){
          
        }
      }
    },deleteProps:function(data,setLoading){
      return {
        onClick:function(){
                   
        }
      }
    }
  }
  return {state,dispath,handle,dataset,option}
}
export function useGetData(callback,args = []){
  const [state,dispath] = useReducer(reducer,initData);
  const Fetch = useFetch();
  const {controller,params} = useMemo(function(){
    if(typeof(callback) === 'function'){
      return callback() ?? {};
    }else if(typeof(callback) === 'object'){
      return callback;
    }else{
      return {}
    }
  },[...args])
  function handleGetData({onStart,onEnd}){
    controller && Fetch.get({
      api:"api/admin/"+controller
      ,params:{
        isTrash:state.inTrash,
        limit:state.limit,
        offset:(state.page - 1) * state.limit,
        ...params
      },onThen:(result => {
          dispath(['set_datas',result.data]);
      }),onError:(error=> {
          dispath(['set_datas',[]]);
      }),onStart,onEnd
    })
  }
  function handleGetLength(){
    controller && Fetch.get({
      api:"api/admin/"+controller+"/count"
      ,params:{
        isTrash:state.inTrash,
        ...params
      },onThen:(result => {
        dispath(['set_total',result.data]);
      }),onError:(error=>{
        dispath(['set_total',0]);
      })
    })
  }

  useEffect(function(){
    dispath(['set_page',1]);
    dispath(['set_total',0]);
  },[state.inTrash,controller,params]);

  useEffect(function(){
    handleGetData({
      onStart:()=>{
          dispath(['set_datas',Array(3).fill(undefined)]);
          dispath(['set_loading',true]);
      },onEnd:()=>{
          dispath(['set_loading',false]);
      }
    });
  },[state.page,state.limit,controller,params,state.inTrash,...args]);

  useEffect(function(){
    handleGetLength();
  },[state.limit,state.inTrash,controller,params])

  const handle = {
    refetch:function(){
      handleGetData({});
      handleGetLength();
    },setPage:function(page){
      dispath(['set_page',page])
    },setTrash:function(trash){
      dispath(['set_trash',trash])
    }
  };
  const option = {
    addProps:{
      to:getRoute("admin",controller,"add")
    }
  }
  const dataset= {
    updateProps:function(data){
      return {
        to:getRoute("admin",controller,"update",{id:data && data.Id})
      }
    },publicProps:function(data,setLoading){
      return {
        onClick:function(){
           data && Fetch.put({
            api:"api/admin/"+controller
            ,params:{
                ...data,
                IsPublic:!data.IsPublic
            },onStart:function(){
              setLoading(true)
            },onEnd:function(){
              handle.refetch && handle.refetch();
              setLoading(false)
            }
          })
        }
      }
    },trashProps:function(data,setLoading){
      return {
        onClick:function(){
          data && Fetch.put({
            api:"api/admin/"+controller
            ,params:{
                ...data,
                IsTrash:!data.IsTrash
            },onStart:function(){
              setLoading(true)
            },onEnd:function(){
              handle.refetch && handle.refetch();
              setLoading(false)
            }
          })
        }
      }
    },deleteProps:function(data,setLoading){
      return {
        onClick:function(){
          data && Fetch.delete({
            api:"api/admin/"+controller+"/"+data.Id
            ,onStart:function(){
              setLoading(true)
            },onEnd:function(){
              handle.refetch && handle.refetch();
              setLoading(false)
            }
          }) 
        }
      }
    }
  }
  return {state,dispath,handle,dataset,option}
}
function DataProvider({state,dispath,handle,displays,dataset,option,config,children,...props}){
  const [displaystate,dispathDisplay] = useReducer(reducerDisplay,Array.isArray(displays) && displays || [])
	return(
		<DataContext.Provider value={{
      state,dispath,handle,displays,dataset,option,config,displays:displaystate,dispathDisplay
    }}>
			{children}
		</DataContext.Provider>
	)
}
export default memo(DataProvider);