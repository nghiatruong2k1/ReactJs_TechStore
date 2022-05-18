import {memo,createContext,useEffect} from 'react';
import {useFetch} from "../../../../Config/Fetch/";

export const ListContext = createContext({});

function ListProvider({state,dispath,controller,action,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath(['set',{[key]:value}])
		}
	}
  	const Fetch = useFetch();
	useEffect(function() {
	    Fetch.get({
	        api:"api/"+controller
	        ,onThen:(result => {
	            dispath(['set_data',result.data])
	        }),onError:(error=> {
	            dispath(['set_data'])
	        }),onStart:(()=>{
	    		dispath(['set_data',Array(state.limit ?? 4).fill(undefined)])
	    		dispath(['set_loading',true])
	        }),onEnd:(()=>{
	        	dispath(['set_loading',false])
	        })
	    })
	},[controller])
	return(
		<ListContext.Provider value={{
			state,handle,controller
		}}>
			{children}
		</ListContext.Provider>
	)
}
export default memo(ListProvider);