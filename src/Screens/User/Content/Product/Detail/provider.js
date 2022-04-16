import {memo,createContext,useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
export const DetailContext = createContext();
function DetailProvider({state,dispath,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
	const {alias} = useParams();
  	const Fetch = global.config.useFetch();
	useEffect(function() {
	    Fetch.get({
	        api:"api/product/"+alias
	        ,onThen:(result => {
	            handle.set("data",result.data ?? null);
	        }),onError:(error=> {
	            handle.set("data",null);
	        }),onStart:(()=>{
	        	handle.set("data",{});
	        	handle.set("quantity",1);
	        	handle.set("isLoading",true);
	        }),onEnd:(()=>{
	        	handle.set("isLoading",false);
	        })
	    })
	},[alias])
	useEffect(function(){
	    global.config.setTitleWebsite(state.data && state.data.Name || "");
	},[state.data])
	return(
		<DetailContext.Provider value={{state,handle}}>
			{children}
		</DetailContext.Provider>
	)
}
export default memo(DetailProvider);