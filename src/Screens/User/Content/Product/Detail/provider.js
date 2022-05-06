import {memo,createContext,useState,useEffect} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import { useFetch } from '../../../../../Config/Fetch/';
export const DetailContext = createContext();
function DetailProvider({state,dispath,children,...props}){
	const navigator = useNavigate();
	const handle = {
		set:(key,value)=>{
			dispath(["set",{[key]:value}])
		}
	}
	const {alias} = useParams();
  	const Fetch = useFetch();
	useEffect(function() {
	    alias && Fetch.get({
	        api:"api/product/"+alias
	        ,onThen:(result => {
	            dispath(["data",result.data ?? null]);
	        }),onError:(error=> {
	            dispath(["data",null]);
	        }),onStart:(()=>{
	        	dispath(["data",{}]);
	        	dispath(["quantity",1]);
	        	dispath(["is_loading",true]);
	        }),onEnd:(()=>{
	        	dispath(["is_loading",false]);
	        })
	    })
	},[alias])
	useEffect(function(){
	    if(state.data){
	    	global.config.setTitleWebsite(state.data && state.data.Name || "");
	    }
	},[state.data])
	return(
		<DetailContext.Provider value={{state,handle}}>
			{children}
		</DetailContext.Provider>
	)
}
export default memo(DetailProvider);