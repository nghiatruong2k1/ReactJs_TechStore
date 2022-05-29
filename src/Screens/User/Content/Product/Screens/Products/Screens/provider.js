import {useParams} from "react-router-dom";
import {memo,useEffect,useMemo} from 'react';
import {useFetch} from "../../../../../../../Config/Fetch/";
import {ProductsContext,handleGetDatas,handleGetLength } from "../init";



function ProductsProvider({state,dispath,action,feild,handle,children,...props}){
	const Fetch = useFetch("product list");
  	useEffect(function() { 
	    action && feild && handleGetLength({getter:Fetch.get,dispath,action,feild});
	},[action,feild,state.sort])
	useEffect(function() {
		console.log("action,feild,state.page,state.sort change")
		document.documentElement.scrollTop = 0;
	    !state.isLoading && action && feild && handleGetDatas({	    	
	    	getter:Fetch.get,dispath,action,feild,state,
	    	onStart:(()=>{
	    		dispath(['set_data',Array(state.limit ?? 1).fill(undefined)])
	    		dispath(['set_loading',true])
	        }),onEnd:(()=>{
	        	dispath(['set_loading',false])
	        })
	    })
	},[action,feild,state.page,state.sort]);
	useEffect(function() {
	    !state.isLoading && action && feild && handleGetDatas({getter:Fetch.get,dispath,action,feild,state})
	},[state.limit]);

	useEffect(function(){
		dispath(["set_page",1]);
	},[action,feild,state.view]);

	useEffect(function(){
		if(state.view == 0){
			dispath(["set_limit",5]);
		}else{
			dispath(["set_limit",8]);
		}
	},[state.view]);
	return(
		<ProductsContext.Provider value={{state,dispath}}>
			{children}
		</ProductsContext.Provider>
	)
}
export default memo(ProductsProvider);