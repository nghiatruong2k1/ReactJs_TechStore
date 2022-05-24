import {useParams} from "react-router-dom";
import {memo,createContext,useEffect,useMemo} from 'react';
import {useFetch} from "../../../../../Config/Fetch/";
export const ProductsContext = createContext();
async function handleGetDatas(getter,dispath,{state,action,feild,onStart,onEnd}){
  	await getter({
        api:"api/product/"+action+"/"+feild,
        params:{
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
async function handleGetLength(getter,dispath,{action,feild}){
	await getter({
      api:"api/product/"+action+"/count/"+feild
      ,onThen:(result => {
          dispath(['set_total',result.data])
      }),onError:(error=> {
          dispath(['set_total'])
      })
  })
}
async function handleGetTitle(getter,setter,{action,feild}){
	await getter({
      api:`api/${action}/${feild}`
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

function ProductsProvider({state,dispath,action,children,...props}){
	const Fetch = useFetch("product list");
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
			handleGetTitle(Fetch.get,global.config.setTitleWebsite,{action,feild:params[feild]})
		}
	},[action,params[feild]])
  	useEffect(function() { 
	    handleGetLength(Fetch.get,dispath,{action,feild:params[feild]});
	},[action,params[feild],state.sort])
	useEffect(function() {
		document.documentElement.scrollTop = 0;
	    handleGetDatas(Fetch.get,dispath,{
	    	state,
	    	action,feild:params[feild],
	    	onStart:(()=>{
	    		dispath(['set_data',Array(state.limit ?? 1).fill(undefined)])
	    		dispath(['set_loading',true])
	        }),onEnd:(()=>{
	        	dispath(['set_loading',false])
	        })
	    })
	},[action,params[feild],state.page,state.sort])
	useEffect(function() {
	    handleGetDatas(Fetch.get,dispath,{state,action,feild:params[feild]})
	},[state.limit])
	useEffect(function(){
		dispath(["set_page",1]);
	},[action,params[feild],state.view])
	useEffect(function(){
		if(state.view == 0){
			dispath(["set_limit",5]);
		}else{
			dispath(["set_limit",8]);
		}
	},[state.view])
	return(
		<ProductsContext.Provider value={{state,dispath}}>
			{children}
		</ProductsContext.Provider>
	)
}
export default memo(ProductsProvider);