import {memo,createContext,useContext,useEffect,useMemo,useReducer,useRef,useState} from 'react';
import { useFetch } from '../../../../../../../Config/Fetch/';
import { getRoute } from '../../../../../../../Config/Route/';
import {reducer,initData,reducerDisplay}                from './init';

export const DataContext = createContext();


const initEvent = function(){
  const es = [
    "ChangeDatasource",
    "ChangeData"
  ].reduce(function(result,name){
      if(typeof(result[name]) !== "function"){
        result[name] = [];
      }
      return result;
  },{});
  function add(eventName,callback){
    if(es[eventName]){
      if(typeof(callback) === 'function'){
        if(Array.isArray(es)){
          const index = es[eventName].findIndex((e)=>(e != callback))
          if(index == -1){
            es[eventName].push(callback)
          }else{
            es[eventName][index] = callback;
          }
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
       if( Array.isArray(es)){
          const index = es[eventName].findIndex((e)=>(e != callback))
          if(index == -1){
            delete es[eventName][index];
          }
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
export function useInitData(callback,args = []){
  const [state,dispath] = useReducer(reducer,{...initData});
  const Fetch = useFetch();
  useEffect(function(){
    dispath(['set_page',1])
    dispath(['set_datas',[]])
  },[...args])

  useEffect(function(){
    dispath(['set_total',state.datas.length]);
  },[state.datas]);
  const handle = {
    refetch:function(){
      dispath(['set_datas',[]])
    },setPage:function(page){
      dispath(['set_page',page])
    },setTrash:function(trash){
      dispath(['set_trash',trash])
    },addData:function(data){
      dispath(['add_data',data])
    },changeData:function(data){
      dispath(['change_data',data])
    },saveData:function(data){
      
    }
  };
  const option = {
    trashProps:{
      hidden:true
    }
  }
  const dataset = {
    publicProps:function(data,setLoading){
      return {
        onClick:function(){
          data.IsPublic = !data.IsPublic
          dispath(['change_data',data])
        }
      }
    },trashProps:function(data,setLoading){
      return {
        title:"Xóa",
        onClick:function(){
          dispath(['remove_data',data])
        }
      }
    },deleteProps:function(data,setLoading){
      return {
        hidden:true
      }
    }
  }
  return {state,dispath,handle,dataset,option}
}


export function useGetData(callback,args = []){
  const [state,dispath] = useReducer(reducer,initData);
  const eventRef = useRef({});
  const Fetch = useFetch();
  const {controller,params} = useMemo(function(){
    if(typeof(callback) === 'function'){
      return callback() ?? {};
    }else if(typeof(callback) === 'object'){
      return callback;
    }else{
      return {}
    }
  },[...args]);
  async function handleGetData({onStart,onEnd}){
    if(controller){
      return await Fetch.get({
        api:"api/admin/"+controller
        ,params:{
          isTrash:state.inTrash,
          limit:state.limit,
          offset:(state.page - 1) * state.limit,
          sort:state.sort,
          filter:state.filter,
          ...params
        },onThen:(result => {
            dispath(['set_datas',result.data]);
        }),onError:(error=> {
            dispath(['set_datas',[]]);
        }),onStart,onEnd
      })
    }
  }
  async function handleGetLength(){
    if(controller){
      return await Fetch.get({
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
  },[state.page,state.limit,state.sort,state.inTrash,controller,params]);

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
    },changeData:function(data){
      dispath(['change_data',data])
    },saveData:function(data){
      data && Fetch.put({
        api:"api/admin/"+controller
        ,params:{
          ...data
        },onEnd:function(){
          handle.refetch && handle.refetch();
        }
      })
    },addData:function(data){
      data && Fetch.post({
        api:"api/admin/"+controller
        ,params:{
          ...data
        },onEnd:function(){
          handle.refetch && handle.refetch();
        }
      })
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