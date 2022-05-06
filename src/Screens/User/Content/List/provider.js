import {memo,createContext,useEffect} from 'react';
import {useFetch} from "../../../../Config/Fetch/";

export const ListContext = createContext({});

function ListProvider({state,dispath,controller,action,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
  	const Fetch = useFetch();
	useEffect(function() {
	    Fetch.get({
	        api:"api/"+controller
	        ,onThen:(result => {
	            dispath({key:'set',payload:{datas:result.data ?? []}})
	        }),onError:(error=> {
	            dispath({key:'set',payload:{datas:[]}})
	        }),onStart:(()=>{
	    		dispath({key:'set',payload:{datas:Array(state.limit ?? 4).fill(undefined)}})
	    		dispath({key:'set',payload:{isLoading:true}})
	        }),onEnd:(()=>{
	        	dispath({key:'set',payload:{isLoading:false}})
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