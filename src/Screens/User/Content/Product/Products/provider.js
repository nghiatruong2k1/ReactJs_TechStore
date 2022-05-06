import {useParams} from "react-router-dom";
import {memo,createContext,useEffect,useMemo} from 'react';
import {useFetch} from "../../../../../Config/Fetch/";
export const ProductsContext = createContext();
function ProductsProvider({state,dispath,action,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
	const feild = useMemo(function() {
		if(action == 'search'){
			return 'query'
		}else{
			return  'alias'
		}
	},[action])
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
			            global.config.setTitleWebsite(result.data && result.data.Name || "")
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
	            dispath({key:'set',payload:{datas:result.data ?? []}})
	        }),onError:(error=> {
	            dispath({key:'set',payload:{datas:[]}})
	        }),onStart,onEnd
	    });
  	}
  	function handleGetLength(){
  		Fetch.get({
	        api:"api/product/"+action+"/count/"+params[feild]
	        ,onThen:(result => {
	            dispath({key:'set',payload:{total:result.data ?? 0}})
	        }),onError:(error=> {
	            dispath({key:'set',payload:{total:0}})
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
	    		dispath({key:'set',payload:{datas:Array(state.limit ?? 1).fill(undefined)}})
	    		dispath({key:'set',payload:{isLoading:true}})
	        }),onEnd:(()=>{
	        	dispath({key:'set',payload:{isLoading:false}})
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