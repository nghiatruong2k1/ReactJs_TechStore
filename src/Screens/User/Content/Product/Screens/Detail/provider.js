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
	            dispath(["set_data",result.data]);
	        }),onError:(error=> {
	            dispath(["set_data"]);
	        }),onStart:(()=>{
	        	dispath(["set_data",{}]);
	        	dispath(["set_quantity",1]);
	        	dispath(["set_loading",true]);
	        }),onEnd:(()=>{
	        	dispath(["set_loading",false]);
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