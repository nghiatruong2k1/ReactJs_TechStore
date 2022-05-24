import {useParams} from "react-router-dom";
import {memo,createContext,useEffect,useMemo} from 'react';
import {useFetch} from "../../../../Config/Fetch/";
export const ListContext = createContext();
async function handleGetDatas(getter,dispath,{state,controller,action,feild,onStart,onEnd}){
  	await getter({
        api:`api/${controller}${action && ("/"+action+"/"+feild) || ""}`
        ,params:{
        	offset:(state.page - 1) * state.limit,
        	limit:state.limit,
        	sort:state.sort,
        },onThen:(result => {
            dispath(['set_data',result.data])
        }),onError:(error=> {
            dispath(['set_data'])
        }),onStart,onEnd
    });
  }
async function handleGetLength(getter,dispath,{controller,action,feild}){
	await getter({
      api:`api/${controller}${action && ("/"+action+"/"+feild) || ""}/count`
      ,onThen:(result => {
          dispath(['set_total',result.data])
      }),onError:(error=> {
          dispath(['set_total'])
      })
  })
}
async function handleGetTitle(getter,setter,{controller,feild}){
	await getter({
      api:`api/${controller}/${feild}`
      ,onThen:(result => {
         if(result.data && result.data.Name){
         	setter(result.data.Name)
         }else{
         	setter("");
         }
      }),onError:(error=> {
          setter("");
      })
  })
}

function ListProvider({state,dispath,controller,action,children,...props}){
	const Fetch = useFetch("list");
	const params = useParams();
	const feild = useMemo(function(){
		if(action === 'search'){
			return 'query';
		}else{
			return 'alias';
		}
	},[action]);
	useEffect(function(){
		if(action === 'search'){
			global.config.setTitleWebsite(`Tìm kiếm "${params[feild]}"`);
		}else{
			global.config.setTitleWebsite("");
		}
	},[controller,action,params[feild]]);

  	useEffect(function() { 
	    handleGetLength(Fetch.get,dispath,{controller,action,feild:params[feild]});
	},[controller,action,params[feild],state.sort]);

	useEffect(function() {
		document.documentElement.scrollTop = 0;
	    handleGetDatas(Fetch.get,dispath,{
	    	state,
	    	controller,
	    	action,feild:params[feild],
	    	onStart:(()=>{
	    		dispath(['set_data',Array(state.limit ?? 1).fill(undefined)])
	    		dispath(['set_loading',true])
	        }),onEnd:(()=>{
	        	dispath(['set_loading',false])
	        })
	    })
	},[controller,action,params[feild],state.page,state.sort]);

	useEffect(function() {
	    handleGetDatas(Fetch.get,dispath,{state,controller,action,feild:params[feild]})
	},[state.limit]);

	useEffect(function(){
		dispath(["set_page",1]);
	},[controller,action,params[feild],state.view]);

	return(
		<ListContext.Provider value={{state,dispath,controller}}>
			{children}
		</ListContext.Provider>
	)
}
export default memo(ListProvider);