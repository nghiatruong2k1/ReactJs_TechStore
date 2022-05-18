import {useParams} from "react-router-dom";
import {memo,createContext,useEffect,useMemo} from 'react';
import {useFetch} from "../../../../../Config/Fetch/";
export const ProductsContext = createContext();
function ProductsProvider({state,dispath,action,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath(['set',{[key]:value}])
		}
	};
	const feild = useMemo(function() {
		if(action == 'search'){
			return 'query'
		}else{
			return  'alias'
		}
	},[action]);

	const params = useParams();
	const Fetch = useFetch("product list");
	useEffect(function() {
	    if(action !== undefined){
	    	if(action == 'search'){
		    	global.config.setTitleWebsite(`Tìm kiếm "${params[feild]}"`)
		    }else{
		    	Fetch.get({
			        api:"api/"+action+"/"+params[feild]
			        ,onThen:(result => {
			        	if(result.data && result.data.Name && typeof(result.data.Name) == 'string')
			      		{
			      			global.config.setTitleWebsite(result.data.Name || "")
			      		}else{
			      			global.config.setTitleWebsite("")
			      		}
			        }),onError:(error=> {
			            global.config.setTitleWebsite("")
			        })
			    })
		    }
	    }
	},[action,params[feild]])
	function handleGetDatas({onStart,onEnd}){
  		Fetch.get({
	        api:"api/product/"+action+"/"+params[feild],
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
  	function handleGetLength(){
  		Fetch.get({
	        api:"api/product/"+action+"/count/"+params[feild]
	        ,onThen:(result => {
	            dispath(['set_total',result.data])
	        }),onError:(error=> {
	            dispath(['set_total'])
	        })
	    })
  	}
  	useEffect(function() { 
	    handleGetLength();
	},[action,params[feild]])
	useEffect(function() {
		document.documentElement.scrollTop = 0;
	    handleGetDatas({
	    	onStart:(()=>{
	    		dispath(['set_data',Array(state.limit ?? 1).fill(undefined)])
	    		dispath(['set_loading',true])
	        }),onEnd:(()=>{
	        	dispath(['set_loading',false])
	        })
	    })
	},[action,params[feild],state.page,state.sort])
	useEffect(function() {
	    handleGetDatas({})
	},[state.limit])
	useEffect(function(){
		handle.set("page",1);
	},[action,params[feild],state.view])
	useEffect(function(){
		if(state.view == 0){
			handle.set("limit",5);
		}else{
			handle.set("limit",8);
		}
	},[state.view])
	return(
		<ProductsContext.Provider value={{state,handle}}>
			{children}
		</ProductsContext.Provider>
	)
}
export default memo(ProductsProvider);