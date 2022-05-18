import {memo,useEffect,createContext} from 'react';
import {useFetch} from "../../../../../Config/Fetch/";
export const BrandsContext = createContext({});
function BrandsProvider({state,dispath,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath(['set',{[key]:value}])
		}
	}
  	const Fetch = useFetch();
	useEffect(function() {
	    Fetch.get({
	        api:"api/brand",
	        params:{
	        	limit:state.limit ?? 1,
	        	offset:0
	        },onThen:(result => {
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
	},[])
	return(
		<BrandsContext.Provider value={{state,handle}}>
			{children}
		</BrandsContext.Provider>
	)
}
export default memo(BrandsProvider);