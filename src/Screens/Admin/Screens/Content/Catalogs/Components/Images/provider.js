import {memo,createContext,useContext,useEffect,useMemo,useReducer} from 'react';
import { useFetch } from '../../../../../../../Config/Fetch/';
import {reducer,initData}                from './init';

export const DataContext = createContext();
export function useGetData({apiData,apiCount}){
  const [state,dispath] = useReducer(reducer,initData);
  const Fetch = useFetch();
  function handleGetData({onStart,onEnd}){
    Fetch.get({
      api:apiData
      ,params:{
        isTrash:state.inTrash,
        limit:state.limit,
        offset:(state.page - 1) * state.limit
      },onThen:(result => {
          dispath(['set_datas',result.data]);
      }),onError:(error=> {
          dispath(['set_datas',[]]);
      }),onStart,onEnd
    })
  }
  function handleGetLength(){
    Fetch.get({
      api:apiCount
      ,params:{
        isTrash:state.inTrash
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
  },[state.inTrash]);

  useEffect(function(){
    handleGetData({
      onStart:()=>{
          dispath(['set_datas',Array(state.limit || 1).fill(undefined)]);
          dispath(['set_loading',true]);
      },onEnd:()=>{
          dispath(['set_loading',false]);
      }
    });
  },[state.page,state.limit,state.inTrash]);

  useEffect(function(){
    handleGetLength();
  },[state.limit,state.inTrash])

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
  console.log(state)
  return {state,dispath,handle}
}
function DataProvider({state,displays,handle,config,children,...props}){
  
	return(
		<DataContext.Provider value={{state,displays,handle,config}}>
			{children}
		</DataContext.Provider>
	)
}
export default memo(DataProvider);