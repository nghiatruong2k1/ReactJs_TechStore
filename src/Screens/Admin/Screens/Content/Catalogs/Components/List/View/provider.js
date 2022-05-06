import {memo,createContext,useContext,useEffect} from 'react';
import {ListContext} from "../provider";
import { useFetch } from '../../../../../../../../Config/Fetch/';
export const ViewContext = createContext();
function ViewProvider({state,dispath,displays,children,...props}){
  const Fetch = useFetch();
  const {controller} = useContext(ListContext);

  const handle = {
    set:function(key,value){
      dispath({key:'set',payload:{[key]:value}})
    },refetch:function(){
      handleGetData({});
      handleGetLength();
    }
  };

  function handleGetData({onStart,onEnd}){
    Fetch.get({
      api:"api/admin/"+controller+"/"
      ,params:{
        isTrash:state.inTrash,
        limit:state.view,
        offset:(state.page - 1) * state.view
      },onThen:(result => {
          dispath({key:'set',payload:{datas:result.data || []}});
      }),onError:(error=> {
          dispath({key:'set',payload:{datas:[]}});
      }),onStart,onEnd
    })
  }
  function handleGetLength(){
    Fetch.get({
      api:"api/admin/"+controller+"/count"
      ,params:{
        isTrash:state.inTrash
      },onThen:(result => {
        dispath({key:'set',payload:{total:result.data || 0}});
      }),onError:(error=>{
        dispath({key:'set',payload:{total:0}});
      })
    })
  }

  // useEffect(function(){
  //   handle.set("datas",[])
  // },[state.page,state.inTrash]);

  useEffect(function(){
    dispath({key:'set',payload:{page:1}});
    dispath({key:'set',payload:{total:0}});
  },[state.inTrash]);

  useEffect(function(){
    handleGetData({
      onStart:()=>{
          dispath({key:'set',payload:{datas:Array(state.view || 1).fill(undefined)}});
          dispath({key:'set',payload:{isLoading:true}});
      },onEnd:()=>{
          dispath({key:'set',payload:{isLoading:false}});
      }
    });
  },[state.page,state.view,state.inTrash]);

  useEffect(function(){
    handleGetLength();
  },[state.view,state.inTrash])


  // useEffect(function() {
  //   console.log("change view",state.view)
  // },[state.view])
  // useEffect(function() {
  //   console.log("change inTrash",state.inTrash)
  // },[state.inTrash])
  // useEffect(function() {
  //   console.log("change datas",state.datas)
  // },[state.datas])
  // useEffect(function() {
  //   console.log("change page",state.page)
  // },[state.page])
  // useEffect(function() {
  //   console.log("change total",state.total)
  // },[state.total])

	return(
		<ViewContext.Provider value={{state,displays,handle}}>
			{children}
		</ViewContext.Provider>
	)
}
export default memo(ViewProvider);