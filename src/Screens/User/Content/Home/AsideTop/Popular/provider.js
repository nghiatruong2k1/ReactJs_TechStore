import {memo,createContext,useEffect} from 'react';
import {useFetch} from "../../../../../../Config/Fetch/";
export const PopularContext = createContext();
function PopularProvider({state,dispath,children,...props}){
	const Fetch = useFetch();
	const handle = {
		set:(key,value)=>{
			dispath(['set',{[key]:value}])
		}
	}
	useEffect(function() {
	    Fetch.get({
	        api:"api/category/popular",
	        params:{
	        	limit:3,
	        	offset:0
	        }
			,onThen:(result => {
	            dispath(['set_data',result.data])
	        }),onError:(error=> {
	            dispath(['set_data'])
	        }),onStart:(()=>{
	    		dispath(['set_data',Array(state.limit ?? 3).fill(undefined)])
	    		dispath(['set_loading',true])
	        }),onEnd:(()=>{
	        	dispath(['set_loading',false])
	        })
	      })
	},[])
	return(
		<PopularContext.Provider value={{state,handle}}>
			{children}
		</PopularContext.Provider>
	)
}
export default memo(PopularProvider);